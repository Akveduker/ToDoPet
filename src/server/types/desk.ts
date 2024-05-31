import { TRequestBodyWithParams } from './requestBody';

export type TRequestWithDeskId<T = object> = TRequestBodyWithParams<
  T,
  { deskId: string }
>;
