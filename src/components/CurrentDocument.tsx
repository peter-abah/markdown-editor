import { useDocuments } from '@/contexts/DocumentsContext';

const CurrentDocument = () => {
  const { currentDoc } = useDocuments();
  
  if (currentDoc == null) {
    return null;
  }

  return (
    <section>
      <header>
        <h2>{currentDoc.name}</h2>
        <p>{currentDoc.updated_at.toString()}</p>
      </header>
 
      <article>
        <p>{currentDoc.content}</p>
      </article>
    </section>
   )
};

export default CurrentDocument;
