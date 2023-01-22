import { createHarryPotterClient } from '@common/http/services/harryPotter/client';
import { GET_ALL_CHARACTERS } from '@common/http/services/harryPotter/constants';
import { Common } from '@typings/common';
import { EHttpMethod } from '@typings/enums/api';

export const getAllCharacters = (): Common.IHttpRequest => ({
  url: () => 'characters',
  client: createHarryPotterClient(),
  method: EHttpMethod.Get,
  type: GET_ALL_CHARACTERS,
});
