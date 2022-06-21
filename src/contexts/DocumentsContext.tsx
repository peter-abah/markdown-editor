import React, {
  useState,
  useContext,
  createContext
} from 'react';

import { nanoid } from 'nanoid';
import { Document } from '@/types';
import data from './data.json';

export interface DocumentsContextInterface {
  docs: Document[];
  currentDoc: Document | null;
  addDoc: (name: string) => void;
  updateDoc: (doc: Document) => void;
  deleteDoc: (doc: Document) => void;
  selectDoc: (doc: Document) => void;
};

export const DocumentsContext = createContext<DocumentsContextInterface | null>(null);

// converts date strings to date objects in data
const defaultDocs = data.map((doc) => {
  return {
    ...doc,
    created_at: new Date(doc.created_at),
    updated_at: new Date(doc.updated_at),
  }
});

interface Props {
  children: React.ReactNode;
};

const DocumentsProvider = ({ children }: Props) => {
  const [docs, setDocs] = useState<Document[]>(defaultDocs);

  // To keep track of document displayed on screen
  const [currentDocId, setCurrentDocId] = useState<string | null>(null);

  // Generates empty document
  const newDoc = (name: string) => {
    if (name === "") return null;
    
    return {
      name,
      id: nanoid(),
      content: '',
      created_at: new Date(),
      updated_at: new Date(),
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
