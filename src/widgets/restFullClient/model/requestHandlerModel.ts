import { IBodyData } from './bodyManagerModel';
import { IHeadersData } from '../../../features/editor/model/headersEditorModel';
import { ICRUD } from '../../../features/editor/model/methodEditorModel';

export interface IRequestData {
  method: ICRUD;
  url: string;
  headers: IHeadersData;
  data: IBodyData | null;
}
