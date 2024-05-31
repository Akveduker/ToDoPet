import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useRedirectOnError from './useRedirectOnError';
import { queryClient } from '@api/api';
import queryKeys from '@client-utils/constants/queryKeys';
import { AxiosError, AxiosResponse } from 'axios';
import { createColumn } from '@api/services/userService/userService';
import { useParams } from 'react-router-dom';
import { TCreateColumnData } from '@client-types/column';
import { TColumnWithId } from '@generic-types/column/column';

const useCreateDeskColumn = (closeModal: () => void) => {
  const formState = useForm<Pick<TColumnWithId, 'name'>>();
  const { deskId } = useParams();
  const redirectOnError = useRedirectOnError();
  const mutation = useMutation<AxiosResponse, AxiosError, TCreateColumnData>({
    mutationFn: async (data) => {
      return createColumn(data);
    },
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({ queryKey: [queryKeys.desk] });
    },
    onError: redirectOnError,
  });
  const { mutate } = mutation;
  const { handleSubmit } = formState;
  const submit = () => {
    return handleSubmit((data) => {
      mutate({ deskId: deskId || '', name: data.name, order: 0 });
    });
  };
  return [formState, mutation, submit] as const;
};

export default useCreateDeskColumn;
