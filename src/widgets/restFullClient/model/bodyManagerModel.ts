import { Dispatch, SetStateAction } from 'react';

export interface IBodyData {
  [key: string]: string;
}

export interface IBodyProps {
  body: IBodyData | null;
  setBody: Dispatch<SetStateAction<IBodyData | null>>;
}
