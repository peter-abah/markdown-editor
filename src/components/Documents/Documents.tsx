import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import { useAppContext } from '@/contexts/AppContext';

import DocumentForm from '../DocumentForm';
import AccentButton from '../AccentButton';
import DocumentBtn from '../DocumentBtn';
import {Document } from '@/types';

import './Documents.css';

const Documents = () => {
  const { value: isFormOpen, toggle: toggleForm } = useBoolean(false);
  const { docs, selectDoc, currentDoc } = useDocuments();
  const { setMenu } = useAppContext();
  // Close menu after selecting doc
  const _selectDoc = (doc: Document) => {
    selectDoc(doc);
    setMenu(false);
  }

  return (
    <section className="documents">
      <h2 className='documents-title'>MY DOCUMENTS</h2>
      <AccentButton
        className='w-full'
        onClick={toggleForm}
      >+ New Document</AccentButton>
      
      <ul className="doc-btns">
        {docs.map((doc) => (
          <DocumentBtn
            key={doc.id}
            doc={doc}
            onClick={() => _selectDoc(doc)}
            isActive={currentDoc?.id === doc.id}
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