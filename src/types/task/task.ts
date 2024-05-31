import { Types } from 'mongoose';

export interface ITask<ID extends string | Types.ObjectId = Types.ObjectId> {
  name: string;
  status: boolean;
  userId: ID;
  deskId: ID;
  columnId: ID;
  order: number;
}

export interface ITaskWithId<
  ID extends string | Types.ObjectId = Types.ObjectId
> extends ITask<ID> {
  _id: string;
}

export type TTaskRequestBody = Pick<ITask, 'name'>;

export type TChangeTaskOrderBody = {
  oldId: string;
  oldOrder: number;
  newId: string;
  newOrder: string;
};
