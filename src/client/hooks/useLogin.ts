import { queryClient } from '@api/api';
import { postLoginData } from '@api/services/loginService/loginService';
import { TAxiosErrorWithMessage } from '@client-types/api';
import querykeys from '@client-utils/constants/queryKeys';
import { TUserLogData } from '@generic-types/user/user';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation<
    AxiosResponse,
    TAxiosErrorWithMessage,
    TUserLogData,
    void
  >({
    mutationFn: (userData) => {
      return postLoginData(userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [querykeys.user] });
    },
  });

  const formState = useForm<TUserLogData>();
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

export default useLogin;
