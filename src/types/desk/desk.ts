import { WithId } from 'mongodb';
import { Types } from 'mongoose';

export interface IDesk<ID extends string | Types.ObjectId = Types.ObjectId> {
  name: string;
  userId: ID;
}

export type TDeskWithId = WithId<IDesk>;

export type TCreateDeskData = Pick<IDesk, 'name'>;
