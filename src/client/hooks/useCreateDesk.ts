import { TCreateDeskData } from '@generic-types/desk/desk';
import { queryClient } from '@api/api';
import { createDesk } from '@api/services/userService/userService';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import useRedirectOnError from './useRedirectOnError';
import queryKeys from '@client-utils/constants/queryKeys';

const useCreateDesk = (closeModal: () => void) => {
  const formState = useForm<TCreateDeskData>();
  const navigateOnError = useRedirectOnError();
  const mutation = useMutation<AxiosResponse, AxiosError, TCreateDeskData>({
    mutationFn: (data) => {
      return createDesk(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.user] });
      closeModal();
    },
    onError: navigateOnError,
  });
  const { mutate } = mutation;
  const { handleSubmit } = formState;

  const submit = () => {
    return handleSubmit((data) => {
      mutate(data);
    });
  };

  return [formState, submit, mutation] as const;
};

export default useCreateDesk;
