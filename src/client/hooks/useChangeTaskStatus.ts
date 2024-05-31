import { queryClient } from '@api/api';
import { changeTask } from '@api/services/userService/userService';
import { TChangeTaskStatus } from '@client-types/task';
import queryKeys from '@client-utils/constants/queryKeys';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

const useChangeTaskStatus = (taskId: string) => {
  const mutation = useMutation<AxiosResponse, AxiosError, TChangeTaskStatus>({
    mutationFn: (data) => {
      return changeTask(taskId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.desk] });
    },
  });
  const { mutate } = mutation;
  const chatngeStatus = (status: boolean) => {
    mutate({ status });
  };
  return [mutation, chatngeStatus] as const;
};

export default useChangeTaskStatus;
