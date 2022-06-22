import ReactModal from 'react-modal';

import './Modal.css';

type Props = React.ComponentProps<typeof ReactModal>;
const Modal = (props: Props) => {
  return (
    <ReactModal
      className='modal'
      overlayClassName='modal-overlay'
      {...props}
    />
  );
};

export default Modal;