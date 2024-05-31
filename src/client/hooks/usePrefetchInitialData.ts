import { useEffect, useState } from 'react';
import { queryClient } from '@api/api';
import useRedirectOnErrorWrapper from './useRedirectOnErrorWrapper';
import { getUser } from '@api/services/userService/userService';
import queryKeys from '@client-utils/constants/queryKeys';

const usePrefetchInitialData = () => {
  const redirectHandler = useRedirectOnErrorWrapper();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const prefetchData = async () => {
      await queryClient.prefetchQuery({
        queryKey: [queryKeys.user],
        queryFn: async () => {
          const response = await redirectHandler(
            getUser({ signal: controller.signal }),
            controller
          );
          return response;
        },
      });

      setIsLoading(false);
    };
    prefetchData();
  }, [redirectHandler]);

  return isLoading;
};

export default usePrefetchInitialData;
