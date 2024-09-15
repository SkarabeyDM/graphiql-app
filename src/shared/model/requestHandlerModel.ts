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

export interface IQueryParams {
  [key: string]: string;
}

export enum EditorType {
  GraphQL = 'GraphQL',
  RestClient = 'REST',
}

export interface IRequest {
  type: EditorType;
  urlQuery: string;
  method: ICRUD;
  headers: IHeadersData;
}

export const LSKey = 'url-qwery-history';
