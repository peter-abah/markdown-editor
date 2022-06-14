import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'

// Components
import Modal from 'react-modal';
import Menu from '@/components/Menu';
import CurrentDocument from '@/components/CurrentDocument';

import './index.css';

// React modal needs to know the root element of
// the app
Modal.setAppElement("#root");

function App() {
  return (
    <DocumentsProvider>
      <Menu />
      <CurrentDocument />
    </DocumentsProvider>
  );
}

export default App;
