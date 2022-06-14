import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import DocumentForm from './DocumentForm';

const Documents = () => {
  const { value: isFormOpen, toggle: toggleForm } = useBoolean(false);
  const { docs, selectDoc } = useDocuments();

  return (
    <section>
      <h2>MY DOCUMENTS</h2>
      <button onClick={toggleForm}>New Document</button>
      
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>
            <button
              onClick={() => selectDoc(doc)}
            >{doc.name}</button> 
          </li>
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