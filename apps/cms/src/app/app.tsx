// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { AuthProvider, CmsUiLibrary } from '@cms-ui-library';

export function App() {
  return(
  <AuthProvider>
    <CmsUiLibrary />
  </AuthProvider>
  )
}

export default App;

<CmsUiLibrary />;