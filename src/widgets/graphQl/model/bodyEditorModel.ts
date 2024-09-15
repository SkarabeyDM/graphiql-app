import { Dispatch, SetStateAction } from 'react';

export enum IBodyType {
  JSON = 'JSON',
  GraphQL = 'GraphQL',
}

export type IBodyOfGraphQl = string;
export interface IBodyOfJson {
  [key: string]: string;
}

export interface IBodyEditorData {
  type: IBodyType;
  body: IBodyOfGraphQl | IBodyOfJson;
}

export interface IBodyEditorProps {
  setBody: Dispatch<SetStateAction<IBodyEditorData | null>>;
}
