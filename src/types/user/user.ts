import { WithId } from 'mongodb';
import { Types } from 'mongoose';

export interface IUser<ID extends string | Types.ObjectId = Types.ObjectId> {
  name: string;
  desks: ID[];
  email: string;
  password: string;
}

export type TUserWithId = WithId<IUser>;

export type TUserRegData = Pick<IUser, 'email' | 'name' | 'password'>;

export type TUserLogData = Pick<IUser, 'email' | 'password'>;
