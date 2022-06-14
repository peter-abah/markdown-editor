import { useDocuments } from '@/contexts/DocumentsContext';
import DocumentPreview from './DocumentPreview';

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
 
      <DocumentPreview content={currentDoc.content} />
    </section>
   )
};

export default CurrentDocument;
