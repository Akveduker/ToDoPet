import { Request } from 'express';
export type TRequestBody<T> = Request<object, object, T>;
export type TRequestParams<P> = Request<P, object, object>;
export type TRequestBodyWithParams<T, P> = Request<P, object, T>;
