import { WithId } from 'mongodb';
import { Types } from 'mongoose';

export interface IColumn<ID extends string | Types.ObjectId = Types.ObjectId> {
  deskId: ID;
  name: string;
  userId: ID;
  order: number;
}
export type TColumnRequestBody = Pick<IColumn, 'name'>;
export type TColumnWithId = WithId<IColumn>;
