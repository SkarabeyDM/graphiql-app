import { Dispatch, SetStateAction } from 'react';
import { IBodyData } from '../../../widgets/restFullClient/model/bodyManagerModel';
import { ICRUD } from './methodEditorModel';
import { IHeadersData } from './headersEditorModel';
import { IBodyEditorData } from '@widgets/graphQl/model/bodyEditorModel';

export interface IUrlProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  method: ICRUD;
  headers: IHeadersData;
  body: IBodyData | IBodyEditorData | null;
}
