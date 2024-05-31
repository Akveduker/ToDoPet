import { TColumnClient } from '@client-types/column';
import { FC } from 'react';
import DeskTask from '../DeskTask/DeskTask';
import CreateDeskTask from '../CreateDeskTask/CreateDeskTask';

const DeskColumn: FC<TColumnClient> = ({ name, tasks, _id }) => {
  return (
    <div className="py-1.5 min-w-56 mr-4">
      <div className="h-full flex flex-col">
        <div className="mb-2">
          <b>{name}</b>
        </div>
        <div className="max-h-75vh">
          {tasks.map((task) => {
            return (
              <div className="mt-2" key={task._id}>
                <DeskTask {...task} />
              </div>
            );
          })}
        </div>
        <div className="mt-2">
          <CreateDeskTask columnId={_id} />
        </div>
      </div>
    </div>
  );
};

export default DeskColumn;
