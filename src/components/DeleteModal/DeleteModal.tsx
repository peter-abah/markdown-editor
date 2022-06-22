import Modal from '../Modal';
import { Document } from '@/types';

interface Props {
  doc: Document | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal = (props: Props) => {
  const { doc, isOpen, onClose, onDelete } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2 className="modal-title">Delete this document?</h2>
      <p className='mb-4'>
        Are you sure you want to delete the {doc?.name}
        document and its contents? This action cannot be 
        reversed.
      </p>
      <button className='modal-btn' onClick={onDelete}>Confirm and Delete</button>
    </Modal>
  );
};

export default DeleteModal;