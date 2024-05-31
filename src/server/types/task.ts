import { Types } from 'mongoose';
import {
  TRequestBody,
  TRequestBodyWithParams,
  TRequestParams,
} from './requestBody';
import { TTaskRequestBody } from '@generic-types/task/task';

export type TTaskRequestWithColumnId = TRequestParams<{ columnId: string }>;
export type TTaskRequestWithId = TRequestParams<{ taskId: string }>;
export type TTaskRequestWithBody = TRequestBody<
  { columnId: Types.ObjectId } & TTaskRequestBody & { deskId: Types.ObjectId }
>;
export type TTaskRequestWithIdAndBody = TRequestBodyWithParams<
  TTaskRequestBody,
  { taskId: string }
>;
