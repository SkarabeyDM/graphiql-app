import { IBodyData } from './bodyManagerModel';
import { IHeadersData } from '../../../features/editor/model/headersEditorModel';
import { ICRUD } from '../../../features/editor/model/methodEditorModel';
import {
  IBodyOfGraphQl,
  IBodyOfJson,
} from '@widgets/graphQl/model/bodyEditorModel';

export interface IRequestData {
  method: ICRUD;
  url: string;
  headers: IHeadersData;
  data: IBodyData | IBodyOfGraphQl | IBodyOfJson | null;
}
