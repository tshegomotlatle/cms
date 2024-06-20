import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CmsUiLibrary } from '@cms-ui-library';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
        <CmsUiLibrary />
  </StrictMode>
);
