import { useState, useEffect, ChangeEvent } from 'react';
import { useDocuments } from '@/contexts/DocumentsContext';
import DocumentPreview from './DocumentPreview';

const CurrentDocument = () => {
  const { currentDoc, updateDoc } = useDocuments();
  const [content, setContent] = useState(currentDoc?.content || '');
  
  // Change content when currentDoc changes
  useEffect(() => {
   setContent(currentDoc?.content || '');
 }, [currentDoc]);

  if (currentDoc == null) {
    return null;
  }
  
  const updateContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };
  
  const onSave = () => {
    updateDoc({ ...currentDoc, content });
  }

  return (
    <section>
      <header>
        <h2>{currentDoc.name}</h2>
        <p>{currentDoc.updated_at.toString()}</p>
      </header>
      
      <textarea
        value={content}
        onChange={updateContent}
      />
      
      <button type='button' onClick={onSave}>Save</button>
      <DocumentPreview content={content} />
    </section>
   )
};

export default CurrentDocument;
