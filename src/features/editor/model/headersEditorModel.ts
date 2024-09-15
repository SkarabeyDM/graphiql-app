import { Dispatch, SetStateAction } from 'react';

export interface IHeadersData {
  [key: string]: string;
}

export interface IHeadersProps {
  setHeaders: Dispatch<SetStateAction<IHeadersData>>;
}

export interface IHeadersItem {
  id: number;
  data: IHeadersData;
}

export interface IHeadersElementProps {
  id: number;
  setItems: Dispatch<SetStateAction<IHeadersItem[]>>;
}
