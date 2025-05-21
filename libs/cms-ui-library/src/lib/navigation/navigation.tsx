import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styles from './navigation.module.scss';
import CourtCases from '../court-cases/case-management/court-cases';
import AddCourtCase from '../court-cases/add-court-case/add-court-case';
import CalendarUi from '../calendar/calendar-ui';
import { InvoiceComponent } from '../invoices/invoice';
import FileManagement from '../file-management/file-management';
import keycloak from '../hooks/authentication/keyclock';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {

  const handleLogout = async () =>
  {
    await keycloak.logout();
  }

  return (
    <BrowserRouter>
      <div className={styles['container']}>
        <div className={styles['navigation-container']}>
          <div className={styles['navigation-item-container']}>
            <div className="display-5">CMS</div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                home
              </span>
              <div className={styles['naviagtion-item-text']}>Dashboard</div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                business_center
              </span>
              <div className={styles['naviagtion-item-text']}>
                <Link to="/court-cases">Case-Management</Link>
              </div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                calendar_month
              </span>
              <div className={styles['naviagtion-item-text']}>
                <Link to="/calendar">Calendar</Link>
              </div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                folder
              </span>
              <div className={styles['naviagtion-item-text']}>
                <Link to="/file-management">Document Management</Link>
              </div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                payments
              </span>
              <div className={styles['naviagtion-item-text']}>
                <Link to="invoices">Invoices</Link>
              </div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
              >
                person
              </span>
              <div className={styles['naviagtion-item-text']}>
                <Link to="invoices">Profile</Link>
              </div>
            </div>
            <div className={styles['navigation-item']}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '50px', paddingRight: '1vw' }}
                onClick={handleLogout}
              >
                Logout
              </span>
              <div className={styles['naviagtion-item-text']}>Logout</div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="court-cases" element={<CourtCases />} />
          <Route path="add-court-case" element={<AddCourtCase />} />
          <Route path="calendar" element={<CalendarUi />} />
          <Route path="file-management" element={<FileManagement />} />
          <Route path="invoices" element={<InvoiceComponent />} />
          <Route path="/" element={<CourtCases />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
