import axiosClient, { AxiosInstance } from 'axios';
import { CreateAxiosDefaults } from 'axios/index';

export const createBaseClient = (
  clientObj: CreateAxiosDefaults,
): AxiosInstance => axiosClient.create(clientObj);
