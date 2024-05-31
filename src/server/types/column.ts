import { Types } from 'mongoose';
import {
  TRequestBody,
  TRequestBodyWithParams,
  TRequestParams,
} from './requestBody';
import { TColumnRequestBody } from '@generic-types/column/column';

export type TColumnRequest = TRequestParams<{ deskId: string }>;
export type TColumnRequestWithBody = TRequestBody<
  { deskId: Types.ObjectId } & TColumnRequestBody
>;
export type TColumnRequestWithId = TRequestParams<{ columnId: string }>;
export type TColumnRequestWithIdAndBody = TRequestBodyWithParams<
  TColumnRequestBody,
  { columnId: string }
>;
