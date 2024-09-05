import { IBodyData } from './bodyManagerModel';
import { IHeaderData } from './headerManagerModel';
import { ICRUD } from './methodManagerModel';

export interface IRequestData {
  method: ICRUD;
  url: string;
  headers: IHeaderData;
  body: IBodyData | null;
}
