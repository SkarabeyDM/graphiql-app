import { IRequestData } from '@shared/model/requestHandlerModel';

export const createUrlFromRequest = ({
  url,
  headers,
  data,
}: IRequestData): string => {
  const urlObj = new URL(url);

  if (data && typeof data === 'object') {
    Object.keys(data).forEach((key: string) => {
      urlObj.searchParams.append(key, data[key]);
    });
  }

  if (headers && typeof headers === 'object') {
    Object.keys(headers).forEach((key: string) => {
      urlObj.searchParams.append(key, headers[key]);
    });
  }

  return `${urlObj.toString()}`;
};
