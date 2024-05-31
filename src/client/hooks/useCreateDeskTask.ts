import { TCreateTaskData } from '@client-types/task';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useRedirectOnError from './useRedirectOnError';
import { queryClient } from '@api/api';
import queryKeys from '@client-utils/constants/queryKeys';
import { AxiosError, AxiosResponse } from 'axios';
import { createTask } from '@api/services/userService/userService';
import { useParams } from 'react-router-dom';

const useCreateDeskTask = (columnId: string, closeModal: () => void) => {
  const { deskId } = useParams();
  const formState = useForm<TCreateTaskData>();
  const redirectOnError = useRedirectOnError();
  const mutation = useMutation<AxiosResponse, AxiosError, TCreateTaskData>({
    mutationFn: (data) => {
      return createTask({ ...data, deskId: deskId || '', columnId });
    },
    onError: redirectOnError,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.desk] });
      closeModal();
    },
  });
  const { mutate } = mutation;
  const { handleSubmit } = formState;
  const submit = () => {
    return handleSubmit((data) => {
      mutate(data);
    });
  };
  return [formState, mutation, submit] as const;
};

export default useCreateDeskTask;
