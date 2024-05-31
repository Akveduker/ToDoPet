import { getDesk } from '@api/services/userService/userService';
import { TAxiosErrorWithMessage } from '@client-types/api';
import queryKeys from '@client-utils/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useRedirectOnErrorWrapper from './useRedirectOnErrorWrapper';
import { TDeskState } from '@client-types/desk';

const useGetDesk = () => {
  const { deskId } = useParams();
  const redirectHandler = useRedirectOnErrorWrapper();

  const query = useQuery<TDeskState, TAxiosErrorWithMessage>({
    queryKey: [queryKeys.desk, deskId],
    queryFn: async () => {
      const data = await redirectHandler(getDesk(deskId || ''));
      return data;
    },
  });

  return query;
};

export default useGetDesk;
