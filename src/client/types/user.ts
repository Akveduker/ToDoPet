import { IUser } from '@generic-types/user/user';
import { TDeskClient } from './desk';

export type TUserClientData = {
  user: Pick<IUser, 'name' | 'email'>;
  desks: TDeskClient[];
};
