import { vi } from 'vitest';

import { Common } from '@typings/common';
import { EHttpMethod } from '@typings/enums/api';

import http from './index';

const mockurl = `www.mockapi;com`;
const mockReqObj: Common.IHttpRequest<any> = {
  type: 'MOCK_REQ',
  method: EHttpMethod.Get,
  url: () => `www.mockapi;com`,
  client: {
    request: vi.fn(() =>
      Promise.resolve({
        data: 'server says hello!',
        status: 200,
      }),
    ),
  },
};

vi.mock('axios');

describe('http.send.name', () => {
  afterEach(() => {
    // mockAxios.reset();
  });

  describe('when making a req', () => {
    it('should fetch data successfully', async () => {
      const result = http.send(mockReqObj);

      await expect(result).resolves.toEqual('server says hello!');

      // expect(mockAxios.request).toHaveBeenCalledWith({
      //   url: mockurl,
      //   data: undefined,
      //   headers: {},
      //   method: 'GET',
      // });
    });
    // describe('when something goes wrong', () => {
    //   describe('and should throw is true', () => {
    //     it('should catch and rethrow the error', async () => {
    //       const result = http.send(mockReqObj);
    //
    //       mockAxios.mockError(new Error('BORKED'));
    //
    //       await expect(result).rejects.toThrowError('BORKED');
    //
    //       expect(mockAxios.request).toHaveBeenCalledWith({
    //         url: mockurl,
    //         data: undefined,
    //         headers: {},
    //         method: 'GET',
    //       });
    //     });
    //   });
    //   describe('and should throw is false', () => {
    //     it('should catch the error and fail gracefully', async () => {
    //       const result = http.send(mockReqObj, { shouldThrow: false });
    //
    //       mockAxios.mockError(new Error('BORKED'));
    //
    //       await expect(result).resolves.toBeUndefined();
    //
    //       expect(mockAxios.request).toHaveBeenCalledWith({
    //         url: mockurl,
    //         data: undefined,
    //         headers: {},
    //         method: 'GET',
    //       });
    //     });
    //   });
    // });
  });
});
