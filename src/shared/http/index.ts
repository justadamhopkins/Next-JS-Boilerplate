import qs from 'qs';

import { cleanObject } from '@common/utils/primitives/objetcs';
import { Common } from '@typings/common';
import { EApiVersion } from '@typings/enums/api';

type THttpOptions = {
  shouldThrow?: boolean;
  removeHeaders?: boolean;
  getCookieValue?: (key: string) => string | undefined;
};

async function send<T>(
  httpReq: Common.IHttpRequest<T>,
  options: THttpOptions,
): Promise<T>;
async function send<T>(
  httpReq: Common.IHttpRequest<T>,
  options: THttpOptions,
): Promise<T | undefined> {
  const { shouldThrow = true, getCookieValue, removeHeaders = false } =
    options || {};
  const type = httpReq.type;
  const { body, url, client, headers } = getHttpRequestData({
    httpReq,
    getCookieValue,
  });
  try {
    const { data } = await client.request<T>({
      url,
      headers: removeHeaders ? undefined : headers,
      method: httpReq.method,
      data: body,
    });
    return data;
  } catch (error: any) {
    const errorMessage = `(http.send) - ${error.message} - ${type} - ${url}`;

    if (!shouldThrow) {
      console.warn(errorMessage);
      return undefined;
    }
    console.error(errorMessage);
    throw error;
  }
}

const http = {
  send,
};

export default http;

const getHttpRequestData = <T>({
  httpReq,
}: {
  httpReq: Common.IHttpRequest<T>;
  getCookieValue?: (key: any) => string | undefined;
}) => {
  const { body, method, ...request } = httpReq;

  // Clean object removes all falsy vals
  const headers = cleanObject({
    ...request.headers,
  }) as Common.IHttpHeaders;

  const version = request.version || EApiVersion.One;
  const url = request.url({ version });
  const [rootUrl, queryParams] = url.split('?') || [];

  return {
    client: request.client,
    url: `${rootUrl}${qs.stringify(qs.parse(queryParams), {
      addQueryPrefix: true,
    })}`,
    method,
    headers,
    body,
  };
};
