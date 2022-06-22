import React from 'react';
import DocumentsProvider from '@/contexts/DocumentsContext'
import AppContextProvider from '@/contexts/AppContext';

// Components
import Modal from 'react-modal';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/ErrorFallback';
import Main from '../Main';

// React modal needs to know the root element of
// the app
Modal.setAppElement("#root");

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      <AppContextProvider>
        <DocumentsProvider>
          <Main />
        </DocumentsProvider>
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
