import LoaderBig from '@ui/icons/LoaderBig/LoaderBig';
const FullscreenLoader = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="mt-centerScreen w-full flex justify-center max-w-md">
        <LoaderBig />
      </div>
    </div>
  );
};

export default FullscreenLoader;
