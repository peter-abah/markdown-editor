import React, {
  useState,
  useContext,
  createContext
} from 'react';

import { nanoid } from 'nanoid';
import { Document } from '@/types';
import { useLocalStorage } from 'usehooks-ts';
import defaultDocs from './data.json';

export interface DocumentsContextInterface {
  docs: Document[];
  currentDoc: Document | null;
  addDoc: (name: string) => void;
  updateDoc: (doc: Document) => void;
  deleteDoc: (doc: Document) => void;
  selectDoc: (doc: Document) => void;
};

export const DocumentsContext = createContext<DocumentsContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
};

const DocumentsProvider = ({ children }: Props) => {
  const [docs, setDocs] = useLocalStorage<Document[]>('docs', defaultDocs);

  // To keep track of document displayed on screen
  const currentId = docs[0]?.id || null;
  const [currentDocId, setCurrentDocId] = useState<string | null>(currentId);

  // Generates empty document
  const newDoc = (name: string) => {
    if (name === "") return null;
    const dateISO = new Date().toISOString();
    return {
      name,
      id: nanoid(),
      content: '',
      created_at: dateISO,
      updated_at: dateISO,
    };
  };
  
  // Add document to state
  const addDoc = (name: string) => {
    let doc = newDoc(name);
    if (doc == null) return;
 
    setDocs([...docs, doc]);
    return doc;
  };
  
  // To show document on screen 
  const selectDoc = (doc: Document) => {
    setCurrentDocId(doc.id);
  };
  
  const deleteDoc = (doc: Document) => {
    const filtered = docs.filter(({ id }) => id !== doc.id);
    setDocs(filtered);
  };
  
  const updateDoc = (doc: Document) => {
    // Remove doc with former data before adding the new data
    const filtered = docs.filter(({ id }) => id !== doc.id);
    
    doc = { ...doc, updated_at: new Date().toISOString() };
    setDocs([...filtered, doc]);
  };
  
  const currentDoc = docs.find(({id}) => id === currentDocId) || null;
  const value = { 
    docs,
    currentDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    selectDoc,
  };
  
  return (
    <DocumentsContext.Provider value={value}>
      {children}
    </DocumentsContext.Provider>
  )
};

export const useDocuments = () => {
  return useContext(DocumentsContext) as DocumentsContextInterface;
};

export default DocumentsProvider;
