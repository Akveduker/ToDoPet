import { ITask } from '@generic-types/task/task';

export type TCreateTaskData = Pick<
  ITask<string>,
  'name' | 'columnId' | 'deskId'
>;

export type TChangeTaskStatus = Pick<ITask<string>, 'status'>;
