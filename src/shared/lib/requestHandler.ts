import { IRequestData } from '@shared/model/requestHandlerModel';
import axios from 'axios';

export const sendRequest = async ({
  method,
  url,
  headers,
  data,
}: IRequestData) => {
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
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};
