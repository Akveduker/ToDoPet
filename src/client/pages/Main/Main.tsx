import FullscreenLoader from '@components/FullscreenLoader/FullscreenLoader';
import Sidebar from '@components/Sidebar/Sidebar';
import usePrefetchInitialData from '@hooks/usePrefetchInitialData';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const isLoading = usePrefetchInitialData();
  if (isLoading) return <FullscreenLoader />;
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
