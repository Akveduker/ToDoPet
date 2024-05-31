import { Response } from 'express';
import { Types } from 'mongoose';
export type TResponseLocals<T extends object> = Response<unknown, T>;
export type TResponseWithId = TResponseLocals<{ _id: Types.ObjectId }>;
