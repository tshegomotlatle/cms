// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes } from 'react-router-dom';

import { CmsUiLibrary } from '@cms-ui-library';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CmsUiLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
