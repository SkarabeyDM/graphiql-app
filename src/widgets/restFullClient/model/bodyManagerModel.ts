export interface IBodyData {
  [key: string]: string;
}

export interface IBodyProps {
  body: IBodyData | null;
  setBody: (value: (prev: IBodyData | null) => IBodyData | null) => void;
}
