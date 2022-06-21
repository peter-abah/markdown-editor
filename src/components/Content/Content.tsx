import { useState, useEffect, ChangeEvent } from 'react';
import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import Preview from '../Preview';
import Header from '../Header';

const Content = () => {
  const { value: showPreview, toggle } = useBoolean(true);
  
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
  
  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;

    updateDoc({...currentDoc, name: e.target.value});
  };
  
  const onSave = () => {
    updateDoc({ ...currentDoc, content });
  }

  return (
    <main>
      <Header
        doc={currentDoc}
        handleSave={onSave}
        handleDelete={() => alert("Implement")}
        updateName={updateName}
      />
 
      <textarea
        value={content}
        onChange={updateContent}
      />
 
      {showPreview && <Preview content={content} /> }
    </main>
  )
};

export default Content;