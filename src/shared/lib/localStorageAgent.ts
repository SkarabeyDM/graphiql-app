import { IRequest, LSKey } from '@shared/model/requestHandlerModel';

export const localStorageAgent = (data: IRequest): void => {
  const result: string | null = localStorage.getItem(LSKey);

  const newData = result ? JSON.parse(result) : [];
  newData.push(data);
  localStorage.setItem(LSKey, JSON.stringify(newData));
};
