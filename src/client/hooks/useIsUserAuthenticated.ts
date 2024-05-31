import { isAuthenticated } from '@api/services/loginService/loginService';
import queryKeys from '@client-utils/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

const useIsUserAuthenticated = () => {
  const res = useQuery({
    queryKey: [queryKeys.valid],
    queryFn: async () => {
      await isAuthenticated();
      return {};
    },
    staleTime: 0,
  });
  return res;
};

export default useIsUserAuthenticated;
