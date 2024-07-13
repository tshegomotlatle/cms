import { Route, Link } from 'react-router-dom';

import styles from './cms-ui-library.module.scss';

/* eslint-disable-next-line */
export interface CmsUiLibraryProps {}

export function CmsUiLibrary(props: CmsUiLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CmsUiLibrary!</h1>

      <ul>
        <li>
          <Link to="/">cms-ui-library\src\lib\cms-ui-library root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>
            This is the cms-ui-library\src\lib\cms-ui-library root route.
          </div>
        }
      />
    </div>
  );
}

export default CmsUiLibrary;
