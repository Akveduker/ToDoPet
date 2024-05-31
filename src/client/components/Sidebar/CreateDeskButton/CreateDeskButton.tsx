import CreateDeskForm from '@components/CreateDeskForm/CreateDeskForm';
import useModalState from '@hooks/useModalState';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';

const CreateDeskButton = () => {
  const { isOpen, openModal, closeModal } = useModalState();
  return (
    <div>
      <PrimaryButton onClick={openModal}>Создать доску</PrimaryButton>
      <CreateDeskForm isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default CreateDeskButton;
