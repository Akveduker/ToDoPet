import { CSSProperties, FC } from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';

const SmallModal: FC<ReactModal.Props> = ({ children, ...props }) => {
  const customStyles: CSSProperties = {
    width: '33%',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <Modal style={{ content: customStyles }} {...props}>
      {children}
    </Modal>
  );
};

export default SmallModal;
