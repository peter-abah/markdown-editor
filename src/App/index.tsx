import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'

// Components
import Menu from '@/components/Menu';

import './index.css';

function App() {
  return (
    <DocumentsProvider>
      <Menu />
    </DocumentsProvider>
  );
}

export default App;
