import { useState } from 'react';

const useModalState = (initial?: boolean) => {
  const [isOpen, setIsOpen] = useState(initial ?? false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return {
    isOpen,
    closeModal,
    openModal,
  };
};

export default useModalState;
