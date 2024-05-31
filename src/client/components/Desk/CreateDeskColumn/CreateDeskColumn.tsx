import useModalState from '@hooks/useModalState';
import CreateDeskColumnForm from './CreateDeskColumnForm/CreateDeskColumnForm';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';

const CreateDeskColumn = () => {
  const { isOpen, closeModal, openModal } = useModalState();
  return (
    <div className="w-48 bac">
      {isOpen ? (
        <CreateDeskColumnForm closeModal={closeModal} />
      ) : (
        <PrimaryButton onClick={openModal} styleType={'small'}>
          Создать колонку
        </PrimaryButton>
      )}
    </div>
  );
};

export default CreateDeskColumn;
