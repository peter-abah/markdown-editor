import { useState, useEffect, ChangeEvent } from 'react';
import { useBoolean } from 'usehooks-ts';
import { useDocuments } from '@/contexts/DocumentsContext';
import { useAppContext } from '@/contexts/AppContext';

import clsx from 'clsx'
import Preview from '../Preview';
import Editor from '../Editor';
import Header from '../Header';
import DeleteModal from '../DeleteModal';
import './Content.css';

const Content = () => {
  const { value: isModalOpen, toggle: _toggleModal } = useBoolean(false);
  const { value: showPreview, toggle: toggleView } = useBoolean(false);
  const { isMenuOpen } = useAppContext();
  const { currentDoc, updateDoc, deleteDoc } = useDocuments();
  const [content, setContent] = useState(currentDoc?.content || '');
  
  // Change content when currentDoc changes
  useEffect(() => {
   setContent(currentDoc?.content || '');
 }, [currentDoc]);
  
  const updateContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };
  
  const updateName = (name: string) => {
    if (currentDoc == null || name === '')
      return;

    updateDoc({...currentDoc, name });
  };
  
  const onSave = () => {
    if (currentDoc == null) return;

    updateDoc({ ...currentDoc, content });
  }
  
  // Confirm current document is not null before opening modal
  const toggleModal = () => {
    if (currentDoc == null) return;
    
    _toggleModal();
  }
  const handleDelete = () => {
    if (currentDoc == null) return;

    deleteDoc(currentDoc);
    toggleModal();
  }
  
  const className = clsx('content', isMenuOpen && 'content--menu-open');
  return (
    <main className={className}>
      <Header
        doc={currentDoc}
        handleSave={onSave}
        handleDelete={toggleModal}
        updateName={updateName}
      />

      <div className='flex overflow-y-auto grow'>
        {!showPreview && 
          <Editor
            toggleView={toggleView}
            value={content}
            onChange={updateContent}
          />
        }

        <Preview
          content={content}
          showView={showPreview}
          toggleView={toggleView}
        /> 
      </div>

      <DeleteModal
        doc={currentDoc}
        onClose={toggleModal}
        onDelete={handleDelete}
        isOpen={isModalOpen}
      />
    </main>
  )
};

export default Content;