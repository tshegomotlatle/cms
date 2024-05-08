// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CmsUiLibrary } from '@cms-ui-library';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<CmsUiLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
