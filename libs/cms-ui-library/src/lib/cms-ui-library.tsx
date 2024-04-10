import { Route, Link } from 'react-router-dom';

import styles from './cms-ui-library.module.scss';
import Navigation from './navigation/navigation';

/* eslint-disable-next-line */
export interface CmsUiLibraryProps {}

export function CmsUiLibrary(props: CmsUiLibraryProps) {
  return (
    <div className={styles['container']}>
      <Navigation />
    </div>
  );
}

export default CmsUiLibrary;
