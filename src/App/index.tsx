import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'

// Components
import Menu from '@/components/Menu';
import CurrentDocument from '@/components/CurrentDocument';

import './index.css';

function App() {
  return (
    <DocumentsProvider>
      <Menu />
      <CurrentDocument />
    </DocumentsProvider>
  );
}

export default App;
