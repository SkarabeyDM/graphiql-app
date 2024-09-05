import axios from 'axios';
import { IRequestData } from './requestHandlerModel';

export const sendRequest = async (DATA: IRequestData) => {
  const { method, url, headers, body } = DATA;
  try {
    const response = await axios({
      method,
      url,
      headers,
      data: body,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};
