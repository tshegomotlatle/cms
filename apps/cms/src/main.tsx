import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CmsUiLibrary } from '@cms-ui-library';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/*" element={<CmsUiLibrary />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
