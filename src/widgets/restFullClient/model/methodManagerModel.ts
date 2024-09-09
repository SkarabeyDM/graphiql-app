import { Dispatch, SetStateAction } from 'react';

export enum ICRUD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IMethodProps {
  method: ICRUD;
  setMethod: Dispatch<SetStateAction<ICRUD>>;
}
