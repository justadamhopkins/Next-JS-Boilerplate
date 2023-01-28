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

  describe('when making a req', () => {
    it('should fetch data successfully', async () => {
      const result = http.send(mockReqObj);

      mockAxios.mockResponse({ data: 'server says hello!', status: 200 });

      await expect(result).resolves.toEqual('server says hello!');

      expect(mockAxios.request).toHaveBeenCalledWith({
        url: mockurl,
        data: undefined,
        headers: {},
        method: 'GET',
      });
    });
    describe('when something goes wrong', () => {
      describe('and should throw is true', () => {
        it('should catch and rethrow the error', async () => {
          const result = http.send(mockReqObj);

          mockAxios.mockError(new Error('BORKED'));

          await expect(result).rejects.toThrowError('BORKED');

          expect(mockAxios.request).toHaveBeenCalledWith({
            url: mockurl,
            data: undefined,
            headers: {},
            method: 'GET',
          });
        });
      });
      describe('and should throw is false', () => {
        it('should catch the error and fail gracefully', async () => {
          const result = http.send(mockReqObj, { shouldThrow: false });

          mockAxios.mockError(new Error('BORKED'));

          await expect(result).resolves.toBeUndefined();

          expect(mockAxios.request).toHaveBeenCalledWith({
            url: mockurl,
            data: undefined,
            headers: {},
            method: 'GET',
          });
        });
      });
    });
  });
});
