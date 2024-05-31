import { FC, useState } from 'react';
import { ITaskWithId } from '@generic-types/task/task';
import CheckboxPrimary from '@ui/inputs/CheckboxPrimary/CheckboxPrimary';
import useChangeTaskStatus from '@hooks/useChangeTaskStatus';

const DeskTask: FC<ITaskWithId<string>> = (props) => {
  const { name, status, _id } = props;
  const [isChecked, setIsChecked] = useState(status);
  const [{ isPending }, changeStatus] = useChangeTaskStatus(_id);

  const onChange = () => {
    if (isPending) return;
    setIsChecked(!isChecked);
    changeStatus(!isChecked);
  };

  return (
    <div className="p-2 rounded-md pl-1 border border-secondary">
      <label className="flex content-center">
        <div className="mr-2">
          <CheckboxPrimary isCheked={isChecked} onChange={onChange} />
        </div>
        <p>{name}</p>
      </label>
    </div>
  );
};

export default DeskTask;
