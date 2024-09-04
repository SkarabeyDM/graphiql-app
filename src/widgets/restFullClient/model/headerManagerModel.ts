export interface IHeaderData {
  [key: string]: string;
}

export interface IheadersProps {
  setHeaders: (value: IHeaderData) => void;
}

export interface IHeaderItem {
  id: number;
  data: IHeaderData;
}

export interface IHeaderElementProps {
  id: number;
  setItems: (value: (prev: IHeaderItem[]) => IHeaderItem[]) => void;
}