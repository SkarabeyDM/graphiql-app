import { IBodyData } from './bodyManagerModel';
import { IHeaderData } from './headerManagerModel';
import { ICRUD } from './methodManagerModel';

export interface IUrlProps {
  url: string;
  setUrl: (value: string) => void;
  method: ICRUD;
  headers: IHeaderData;
  body: IBodyData | null;
}
