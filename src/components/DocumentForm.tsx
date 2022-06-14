import { useForm } from "react-hook-form";
import { useDocuments } from '@/contexts/DocumentsContext';

import Modal from 'react-modal';

interface FormData {
  docName: string;
};

interface Props {
  isOpen: boolean;
  closeForm: () => void;
};
const DocumentForm = ({ isOpen, closeForm }: Props) => {
  const { addDoc, selectDoc } = useDocuments();
  const { register, handleSubmit, reset } = useForm<FormData>();
  
  // Reset form before closing
  const _closeForm = () => {
    reset();
    closeForm();
  };

  const onSubmit = ({ docName }: FormData) => {
    const doc = addDoc(docName);
    if (doc == null) return;
 
    selectDoc(doc);
    _closeForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={_closeForm}
    >
      <h2>Add Document</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('docName', { required: true })}
        />
        <button type='submit'>Save</button>
        <button type='button' onClick={_closeForm}>Close</button>
      </form>
    </Modal>
   )
};

export default DocumentForm;