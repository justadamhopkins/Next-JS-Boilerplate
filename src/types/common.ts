import { AxiosInstance } from 'axios';

import { EHttpMethod } from '@typings/enums/api';

export declare namespace Common {
  interface IHttpRequest<Body = any> {
    type: string | string[];
    method: EHttpMethod;
    body?: Body;
    headers?: IHttpHeaders;
    client: AxiosInstance;
    url: () => string;
  }

  interface IHttpHeaders {
    [headerKey: string]: string;
  }
}
