import { FC } from 'react';
import DeskColumn from '../DeskColumn/DeskColumn';
import { TColumnClient } from '@client-types/column';

const DeskColumnDndWrapper: FC<TColumnClient> = (props) => {
  return (
    <div>
      <DeskColumn {...props} />
    </div>
  );
};

export default DeskColumnDndWrapper;
