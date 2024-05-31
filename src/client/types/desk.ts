import { IDesk, TDeskWithId } from '@generic-types/desk/desk';
import { TColumnClient } from './column';

export type TDeskClient = Pick<TDeskWithId, 'name' | '_id'>;

export type TDeskState = {
  desk: TDeskClient;
  columns: TColumnClient[];
};

export type TCreateDeskData = Pick<IDesk, 'name'>;
