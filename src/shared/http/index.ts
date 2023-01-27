import { getHttpRequestData } from '@common/http/getHttpReqData';
import { log } from '@common/utils/logger';
import { Common } from '@typings/common';

type THttpOptions = {
  shouldThrow: boolean;
  removeHeaders?: boolean;
  getCookieValue?: (key: string) => string | undefined;
};

async function send<T>(
  httpReq: Common.IHttpRequest<T>,
  options?: THttpOptions,
): Promise<T>;
async function send<T>(
  httpReq: Common.IHttpRequest<T>,
  options?: THttpOptions,
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
      log.warn(errorMessage);
      return undefined;
    }
    log.error(errorMessage);
    throw error;
  }
}

const http = {
  send,
};

export default http;
