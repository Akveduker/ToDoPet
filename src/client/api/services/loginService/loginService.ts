import { pureInstance } from '../../api';
import { TUserLogData, TUserRegData } from '@generic-types/user/user';

class LoginService {
  isAuthenticated() {
    return pureInstance.get('/valid');
  }
  postLoginData(data: TUserLogData) {
    return pureInstance.post('/login', data);
  }
  postRegData(data: TUserRegData) {
    return pureInstance.post('/registration', data);
  }
}

export const { postLoginData, postRegData, isAuthenticated } =
  new LoginService();
