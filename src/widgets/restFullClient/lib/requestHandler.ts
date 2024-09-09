import axios from 'axios';
import { IRequestData } from './requestHandlerModel';

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
      data,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};
