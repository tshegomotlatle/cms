import { Route, Routes } from 'react-router-dom';
import styles from './navigation.module.scss';
import Login from '../authentication/login/login';
import Register from '../authentication/register/register';
import CourtCases from '../court-cases/case-management/court-cases';
import AddCourtCase from '../court-cases/add-court-case/add-court-case';
import CalendarUi from '../calendar/calendar-ui';
import TestComponent from '../test-component/test-component';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['navigation-container']}>
        <div className="display-5">CMS</div>
        <div className={styles['navigation-item-container']}>
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
              <a href="/court-cases">Case Management</a>
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
              <a href="/calendar">Calendar</a>
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
              Document Management
            </div>
          </div>
          <div className={styles['navigation-item']}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '50px', paddingRight: '1vw' }}
            >
              payments
            </span>
            <div className={styles['naviagtion-item-text']}>Invoices</div>
          </div>
          <div className={styles['navigation-item']}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '50px', paddingRight: '1vw' }}
            >
              <a href="/login">Logout</a>
            </span>
            <div className={styles['naviagtion-item-text']}>Logout</div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/court-cases" element={<CourtCases />} />
        <Route path="/add-court-case" element={<AddCourtCase />} />
        <Route path="/calendar" element={<CalendarUi />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default Navigation;
