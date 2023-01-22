import { AxiosInstance } from 'axios';

import { TWENTY_SECONDS_IN_MS } from '@common/constants/times';
import { createBaseClient } from '@common/http/createBaseClient';

export const createHarryPotterClient = (): AxiosInstance =>
  createBaseClient({
    baseURL: 'https://hp-api.onrender.com/api/',
    timeout: TWENTY_SECONDS_IN_MS,
  });
