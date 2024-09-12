import { Dispatch, SetStateAction } from 'react';
import { IBodyData } from '../../../widgets/restFullClient/model/bodyManagerModel';
import { ICRUD } from './methodEditorModel';
import { IHeadersData } from './headersEditorModel';

export interface IUrlProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  method: ICRUD;
  headers: IHeadersData;
  body: IBodyData | null;
}
