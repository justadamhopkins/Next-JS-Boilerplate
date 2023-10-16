import { fromPartial } from '@total-typescript/shoehorn';
import { vi } from 'vitest';

import { Common } from '@typings/common';
import { EHttpMethod } from '@typings/enums/api';

import http from './index';

vi.mock('axios');

const mockurl = `www.mockapi;com`;

const mockReqObj: Common.IHttpRequest<any> = {
  type: 'MOCK_REQ',
  method: EHttpMethod.Get,
  url: () => `www.mockapi;com`,
  client: fromPartial({
    request: vi.fn(() =>
      Promise.resolve({
        data: 'server says hello!',
        status: 200,
      }),
    ),
  }),
};

describe(http.send.name, () => {
  describe('when making a req', () => {
    it('should fetch data successfully', async () => {
      const spy = vi.fn(() =>
        Promise.resolve({
          data: 'server says hello!',
          status: 200,
        }),
      );

      const result = http.send({
        ...mockReqObj,
        client: fromPartial({ request: spy }),
      });

      await expect(result).resolves.toEqual('server says hello!');

      expect(spy).toHaveBeenCalledWith({
        url: mockurl,
        data: undefined,
        headers: {},
        method: 'GET',
      });
    });
    describe('when something goes wrong', () => {
      describe('and should throw is true', () => {
        it('should catch and rethrow the error', async () => {
          const spy = vi.fn(() => Promise.reject('BORKED'));

          const result = http.send({
            ...mockReqObj,
            client: fromPartial({ request: spy }),
          });

          await expect(result).rejects.toThrowError('BORKED');

          expect(spy).toHaveBeenCalledWith({
            url: mockurl,
            data: undefined,
            headers: {},
            method: 'GET',
          });
        });
      });
      describe('and should throw is false', () => {
        it('should catch the error and fail gracefully', async () => {
          const spy = vi.fn(() => Promise.reject('BORKED'));

          const result = http.send(
            {
              ...mockReqObj,
              client: fromPartial({ request: spy }),
            },
            { shouldThrow: false },
          );

          await expect(result).resolves.toBeUndefined();

          expect(spy).toHaveBeenCalledWith({
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
