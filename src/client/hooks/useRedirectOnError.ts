import routes from '@client-utils/constants/routes';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const useRedirectOnError = () => {
  const navigate = useNavigate();

  const navigateOnError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      navigate(`/${routes.auth}/${routes.login}`);
    }
  };

  return navigateOnError;
};

export default useRedirectOnError;
