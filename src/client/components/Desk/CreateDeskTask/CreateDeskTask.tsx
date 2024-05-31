import useModalState from '@hooks/useModalState';
import CreateDeskTaskForm from './CreateDeskTaskForm/CreateDeskTaskForm';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import { FC } from 'react';

interface ICreateDeskTaskProps {
  columnId: string;
}

const CreateDeskTask: FC<ICreateDeskTaskProps> = ({ columnId }) => {
  const { isOpen, openModal, closeModal } = useModalState();
  return (
    <div>
      {isOpen ? (
        <CreateDeskTaskForm closeModal={closeModal} columnId={columnId} />
      ) : (
        <PrimaryButton styleType="small" onClick={openModal}>
          Создать задачу
        </PrimaryButton>
      )}
    </div>
  );
};

export default CreateDeskTask;
