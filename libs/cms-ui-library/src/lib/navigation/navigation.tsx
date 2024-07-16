import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styles from './navigation.module.scss';
import Login from '../authentication/login/login';
import Register from '../authentication/register/register';
import CourtCases from '../court-cases/case-management/court-cases';
import AddCourtCase from '../court-cases/add-court-case/add-court-case';
import CalendarUi from '../calendar/calendar-ui';
import Invoice from '../Invoices/invoice';
import FileManagement from '../file-management/file-management';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
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
              >
                <Link to="/login">Logout</Link>
              </span>
              <div className={styles['naviagtion-item-text']}>Logout</div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="court-cases" element={<CourtCases />} />
          <Route path="add-court-case" element={<AddCourtCase />} />
          <Route path="calendar" element={<CalendarUi />} />
          <Route path="file-management" element={<FileManagement />} />
          <Route path="invoices" element={<Invoice />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
