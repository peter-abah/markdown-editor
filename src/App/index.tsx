import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'

import './index.css';

function App() {
  return (
    <DocumentsProvider>
      <div className="App">
        <h1>Hello markdown</h1>
      </div>
    </DocumentsProvider>
  );
}

export default App;
