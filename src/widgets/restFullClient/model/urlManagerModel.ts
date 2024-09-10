import { Dispatch, SetStateAction } from 'react';
import { IBodyData } from './bodyManagerModel';
import { IHeaderData } from './headerManagerModel';
import { ICRUD } from './methodManagerModel';

export interface IUrlProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  method: ICRUD;
  headers: IHeaderData;
  body: IBodyData | null;
}
