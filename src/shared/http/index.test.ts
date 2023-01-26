import { AxiosInstance } from 'axios';
import mockAxios from 'jest-mock-axios';

import http from '@common/http/index';
import { Common } from '@typings/common';
import { EHttpMethod } from '@typings/enums/api';

const mockurl = `www.mockapi;com`;
const mockReqObj: Common.IHttpRequest<any> = {
  type: 'MOCK_REQ',
  method: EHttpMethod.Get,
  url: () => `www.mockapi;com`,
  client: (mockAxios as unknown) as AxiosInstance,
};

describe('http.send.name', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should fetch data', () => {
    http.send(mockReqObj);

    expect(mockAxios.request).toHaveBeenCalledWith({
      url: mockurl,
      data: undefined,
      headers: {},
      method: 'GET',
    });
  });
});
