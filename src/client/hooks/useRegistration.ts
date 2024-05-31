import queryKeys from '@client-utils/constants/queryKeys';
import { queryClient } from '@api/api';
import { postRegData } from '@api/services/loginService/loginService';
import { TUserRegData } from '@generic-types/user/user';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TAxiosErrorWithMessage } from '@client-types/api';

const useRegistration = () => {
  const navigate = useNavigate();

  const mutation = useMutation<
    AxiosResponse,
    TAxiosErrorWithMessage,
    TUserRegData,
    void
  >({
    mutationFn: (userData) => {
      return postRegData(userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.user] });
    },
  });

  const formState = useForm<TUserRegData>();

  const { isSuccess, mutate } = mutation;
  const { handleSubmit } = formState;

  const submit = () => {
    return handleSubmit((data) => {
      mutate(data);
    });
  };

  useEffect(() => {
    if (isSuccess) navigate(`/`);
  }, [isSuccess, navigate]);

  return [formState, mutation, submit] as const;
};

export default useRegistration;
