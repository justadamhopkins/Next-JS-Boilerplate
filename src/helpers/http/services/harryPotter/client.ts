import { TWENTY_SECONDS_IN_MS } from '@constants/times';
import { AxiosInstance } from 'axios';

import { createBaseClient } from '@helpers/http/createBaseClient';

export const createHarryPotterClient = (): AxiosInstance =>
  createBaseClient({
    baseURL: 'https://hp-api.onrender.com/api/',
    timeout: TWENTY_SECONDS_IN_MS,
  });
