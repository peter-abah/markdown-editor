import { useDocuments } from '@/contexts/DocumentsContext';

const Documents = () => {
  const { docs, selectDoc } = useDocuments();

  return (
    <section>
      <h2>MY DOCUMENTS</h2>
      <button>New Document</button>
      
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>
            <button
              onClick={() => selectDoc(doc)}
            >{doc.name}</button> 
          </li>
        ))}
      </ul>
    </section>
  )
};

export default Documents;