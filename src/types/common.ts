import { AxiosInstance } from 'axios';

import { EApiVersion, EHttpMethod } from '@typings/enums/api';

export declare namespace Common {
  interface IHttpRequest<Body = any> {
    type: string | string[];
    method: EHttpMethod;
    body?: Body;
    headers?: IHttpHeaders;
    client: AxiosInstance;
    url: (options: IHttpRequestUrl) => string;
    version?: EApiVersion;
  }

  interface IHttpRequestUrl {
    version?: EApiVersion;
  }

  interface IHttpHeaders {
    [headerKey: string]: string;
  }
}
