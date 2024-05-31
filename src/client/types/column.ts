import { IColumn } from '@generic-types/column/column';
import { ITaskWithId } from '@generic-types/task/task';

export type TColumnClient = Pick<
  IColumn<string>,
  'name' | 'order' | 'userId'
> & { _id: string } & {
  tasks: ITaskWithId<string>[];
};

export type TCreateColumnData = Pick<
  IColumn<string>,
  'name' | 'order' | 'deskId'
>;
