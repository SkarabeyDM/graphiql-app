import {
  IRequestData,
  EditorType,
  IRequest,
} from '@shared/model/requestHandlerModel';
import axios from 'axios';
import { createUrlFromRequest } from './createUrlFromRequest';
import { localStorageAgent } from './localStorageAgent';

export const sendRequest = async (
  page: EditorType,
  { method, url, headers, data }: IRequestData,
) => {
  try {
    const response = await axios({
      method,
      url,
      headers,
      data:
        typeof data === 'string'
          ? {
              query: data,
            }
          : data,
    });

    const urlQwery = createUrlFromRequest({ method, url, headers, data });
    const lsData: IRequest = { type: page, urlQuery: urlQwery };

    localStorageAgent(lsData);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};
