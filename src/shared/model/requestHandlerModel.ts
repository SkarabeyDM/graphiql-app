import { IHeadersData } from '@features/editor/model/headersEditorModel';
import { ICRUD } from '@features/editor/model/methodEditorModel';
import {
  IBodyOfGraphQl,
  IBodyOfJson,
} from '@widgets/graphQl/model/bodyEditorModel';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';

export interface IRequestData {
  method: ICRUD;
  url: string;
  headers: IHeadersData;
  data: IBodyData | IBodyOfGraphQl | IBodyOfJson | null;
}
