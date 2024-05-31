import routes from '@client-utils/constants/routes';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectOnErrorWrapper = () => {
  const navigate = useNavigate();
  const handler = useCallback(
    async <T>(
      fetchHandler: Promise<AxiosResponse<T>>,
      controller?: AbortController
    ) => {
      try {
        const response = await fetchHandler;
        return response.data;
      } catch (e) {
        const typedErr = e as AxiosError;
        if (controller) controller.abort();
        if (typedErr.response?.status === 401) {
          navigate(`/${routes.auth}/${routes.login}`);
        }
        throw e;
      }
    },
    [navigate]
  );
  return handler;
};

export default useRedirectOnErrorWrapper;
