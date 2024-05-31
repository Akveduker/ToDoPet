import ErrorHandler from '@components/ErrorHandler/ErrorHandler';
import FullscreenLoader from '@components/FullscreenLoader/FullscreenLoader';
import CreateDeskColumn from './CreateDeskColumn/CreateDeskColumn';
import useGetDesk from '@hooks/useGetDesk';
import DeskColumn from './DeskColumn/DeskColumn';
const Desk = () => {
  const { data, error, isError, isLoading } = useGetDesk();
  if (isError)
    return (
      <h2 className="mt-3 ml-3">
        <ErrorHandler error={error} />
      </h2>
    );
  if (isLoading || !data) return <FullscreenLoader />;
  const { columns, desk } = data;
  return (
    <div className="ml-4">
      <h1>{desk.name}</h1>
      <div className="flex mt-1">
        {columns.map((column) => {
          return (
            <div key={column._id}>
              <div>
                <DeskColumn {...column} />
              </div>
            </div>
          );
        })}
        <CreateDeskColumn />
      </div>
    </div>
  );
};

export default Desk;
