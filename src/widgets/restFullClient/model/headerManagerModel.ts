export interface IHeaderData {
  [key: string]: string;
}

export interface IHeaderProps {
  setHeaders: (value: (prev: IHeaderData) => IHeaderData) => void;
}
