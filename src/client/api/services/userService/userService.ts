import { refreshInstance } from '@api/api';
import { TColumnClient, TCreateColumnData } from '@client-types/column';
import { TDeskState } from '@client-types/desk';
import { TChangeTaskStatus, TCreateTaskData } from '@client-types/task';
import { TUserClientData } from '@client-types/user';
import { TCreateDeskData } from '@generic-types/desk/desk';
import { TChangeTaskOrderBody } from '@generic-types/task/task';
import { AxiosRequestConfig } from 'axios';

class UserSevice {
  getUser(config?: AxiosRequestConfig) {
    return refreshInstance.get<TUserClientData>('/user', config);
  }
  getDesk(id: string | undefined) {
    return refreshInstance.get<TDeskState>(`/desk/${id || ''}`);
  }
  createDesk(body: TCreateDeskData) {
    return refreshInstance.post('/desk', body);
  }
  createColumn(body: TCreateColumnData) {
    return refreshInstance.post<TColumnClient>(`/column`, body);
  }
  createTask(body: TCreateTaskData) {
    return refreshInstance.post('/task', body);
  }
  changeTask(id: string, body: TChangeTaskStatus) {
    return refreshInstance.patch(`/task/${id}`, body);
  }
  changeTaskOrder(body: TChangeTaskOrderBody) {
    return refreshInstance.post(`/task/order`, body);
  }
}

export const {
  getUser,
  getDesk,
  createDesk,
  createColumn,
  changeTask,
  createTask,
  changeTaskOrder,
} = new UserSevice();
