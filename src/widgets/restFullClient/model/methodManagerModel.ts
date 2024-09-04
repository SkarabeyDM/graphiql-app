export enum ICRUD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IMethodProps {
  method: ICRUD;
  setMethod: (value: ICRUD) => void;
}
