import { IBodyData } from './bodyManagerModel';
import { IHeadersData } from './headerManagerModel';
import { ICRUD } from './methodManagerModel';

export interface IRequestData {
  method: ICRUD;
  url: string;
  headers: IHeadersData;
  data: IBodyData | null;
}
