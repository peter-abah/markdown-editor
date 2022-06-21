import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'

// Components
import Modal from 'react-modal';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import Menu from '@/components/Menu';
import CurrentDocument from '@/components/CurrentDocument';

// React modal needs to know the root element of
// the app
Modal.setAppElement("#root");

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <DocumentsProvider>
        <Menu />
        <CurrentDocument />
      </DocumentsProvider>
    </ErrorBoundary>
  );
}

export default App;
