import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import DocumentForm from '../DocumentForm';
import AccentButton from '../AccentButton';
import DocumentBtn from '../DocumentBtn';

import './index.css';

const Documents = () => {
  const { value: isFormOpen, toggle: toggleForm } = useBoolean(false);
  const { docs, selectDoc } = useDocuments();

  return (
    <section>
      <h2 className='documents-title'>MY DOCUMENTS</h2>
      <AccentButton
        onClick={toggleForm}
      >+ New Document</AccentButton>
      
      <ul>
        {docs.map((doc) => (
          <DocumentBtn
            key={doc.id}
            doc={doc}
            onClick={() => selectDoc(doc)}
          />
        ))}
      </ul>
      
      <DocumentForm
        isOpen={isFormOpen}
        closeForm={toggleForm}
      />
    </section>
  )
};

export default Documents;