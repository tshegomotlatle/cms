// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useAuth from 'libs/cms-ui-library/src/lib/hooks/authentication/useAuth';
import styles from './app.module.scss';

import { CmsUiLibrary } from '@cms-ui-library';

export function App() {
  const login = useAuth();

  const showApp = () => {
    if (login.isLogin) {
      console.log(login.isLogin);
      return <CmsUiLibrary />;
    }
  };

  return showApp();
}

export default App;
