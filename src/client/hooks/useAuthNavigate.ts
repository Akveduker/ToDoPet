import routes from '@client-utils/constants/routes';
import { useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import useIsUserAuthenticated from './useIsUserAuthenticated';

const useAuthNavigate = () => {
  const navigate = useNavigate();
  const isClearAuthRoute = useMatch(`${routes.auth}`);
  const query = useIsUserAuthenticated();
  const { isLoading } = query;
  useEffect(() => {
    if (isClearAuthRoute && !isLoading) return navigate('login');
  }, [navigate, isClearAuthRoute, isLoading]);

  return query;
};

export default useAuthNavigate;
