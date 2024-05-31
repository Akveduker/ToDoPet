import UserData from '@components/Sidebar/UserData/UserData';
import DeskList from '@components/Sidebar/DeskList/DeskList';
import CreateDeskButton from './CreateDeskButton/CreateDeskButton';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-primary">
      <div className="px-8">
        <h1>Kanban</h1>
        <div className="my-4">
          <UserData />
        </div>
      </div>
      <div className="flex flex-col">
        <DeskList />
      </div>
      <div className="px-8 mt-3">
        <CreateDeskButton />
      </div>
    </div>
  );
};

export default Sidebar;
