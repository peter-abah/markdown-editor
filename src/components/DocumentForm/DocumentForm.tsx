import { useForm } from "react-hook-form";
import { useDocuments } from '@/contexts/DocumentsContext';

import Modal from '../Modal';
import './DocumentForm.css';

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
      <h2 className='modal-title'>Add Document</h2>
      <form className='doc-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='doc-input'>Document Name</label>
        <input
          id='doc-input'
          {...register('docName', { required: true })}
        />
 
        <button className='modal-btn' type='submit'>+ Create</button>
      </form>
    </Modal>
   )
};

export default DocumentForm;