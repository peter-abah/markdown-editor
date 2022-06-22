import { useState, useEffect, ChangeEvent } from 'react';
import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import { useAppContext } from '@/contexts/AppContext';

import clsx from 'clsx'
import Preview from '../Preview';
import Header from '../Header';
import './Content.css';

const Content = () => {
  const { value: showPreview, toggle } = useBoolean(true);
  const { isMenuOpen } = useAppContext();
  const { currentDoc, updateDoc } = useDocuments();
  const [content, setContent] = useState(currentDoc?.content || '');
  
  // Change content when currentDoc changes
  useEffect(() => {
   setContent(currentDoc?.content || '');
 }, [currentDoc]);
  
  const updateContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };
  
  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentDoc == null || e.target.value === '')
      return;

    updateDoc({...currentDoc, name: e.target.value});
  };
  
  const onSave = () => {
    if (currentDoc == null) return;

    updateDoc({ ...currentDoc, content });
  }
  
  const className = clsx('content', isMenuOpen && 'content--menu-open');
  return (
    <main className={className}>
      <Header
        doc={currentDoc}
        handleSave={onSave}
        handleDelete={() => alert("Implement")}
        updateName={updateName}
      />
 
      {currentDoc &&
        <textarea
          value={content}
          onChange={updateContent}
        />
      }

      {showPreview && <Preview content={content} /> }
    </main>
  )
};

export default Content;