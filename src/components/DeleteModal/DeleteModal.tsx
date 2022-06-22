import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal = (props: Props) => {
  const { isOpen, onClose, onDelete } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2>Delete this document?</h2>
      <p>
        Are you sure you want to delete the ‘welcome.md’
        document and its contents? This action cannot be 
        reversed.
      </p>
      <button onClick={onDelete}>Confirm and Delete</button>
    </Modal>
  );
};

export default DeleteModal;