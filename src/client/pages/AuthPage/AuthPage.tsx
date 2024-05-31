import FullscreenLoader from '@components/FullscreenLoader/FullscreenLoader';
import useAuthNavigate from '@hooks/useAuthNavigate';
import { Navigate, Outlet } from 'react-router-dom';
const AuthPage = () => {
  const { isLoading, isSuccess } = useAuthNavigate();
  if (isLoading) return <FullscreenLoader />;
  if (isSuccess) return <Navigate to={'/'} />;
  return (
    <div className="flex justify-center h-screen">
      <div className="mt-centerScreen w-full  max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
