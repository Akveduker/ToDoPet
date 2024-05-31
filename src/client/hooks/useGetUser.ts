import { getUser } from '@api/services/userService/userService';
import queryKeys from '@client-utils/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const res = useQuery({
    queryKey: [queryKeys.user],
    queryFn: async () => {
      const response = await getUser();
      return response.data;
    },
  });
  return res;
};

export default useGetUser;
