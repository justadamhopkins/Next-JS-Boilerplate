import qs from 'qs';

import { cleanObject } from '@common/utils/primitives/objetcs';
import { Common } from '@typings/common';

export const getHttpRequestData = <T>({
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

  const url = request.url();
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
