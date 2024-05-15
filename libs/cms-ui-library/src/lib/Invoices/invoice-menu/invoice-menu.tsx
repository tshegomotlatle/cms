import { useEffect, useState } from 'react';
import styles from './invoice-menu.module.scss';
import axios, { AxiosResponse } from 'axios';
import { CourtCaseDto } from '../../data-transfer-object/court-case/court-case.dto';

/* eslint-disable-next-line */
export interface InvoiceMenuProps {}

export function InvoiceMenu(props: InvoiceMenuProps) {

  const [courtCases, setCourtCases] = useState<CourtCaseDto[]>()

  useEffect(() => {
    axios.post('/court-cases/getAllCases')
    .then((response : AxiosResponse) => {
      setCourtCases(response.data)
    });
  }, [])

  const searchCases = (event: { target: { value: string } }) => {
    console.log(event?.target.value);
  }; 

  return (
    <div className={styles['container']}>
      <div className={styles['courtCasesHeader']}>
        <div className={styles['search']}>
          <input
            type="text"
            className={styles['searchInput']}
            name="searchInput"
            onChange={searchCases}
            placeholder="Search cases"
          />
        </div>
        <div className={styles['addCase']}>
          <a href="/add-invoices" className={styles['addInvoiceButton']}>
            <span
              className="material-symbols-outlined"
              id={styles['addButton']}
            >
              add
            </span>
          </a>
        </div>
        <div className={styles['filter']}>
          <span
            className="material-symbols-outlined"
            id={styles['filterButton']}
          >
            filter_alt
          </span>
        </div>
        <div className={styles['sort']}>
          <span className="material-symbols-outlined" id={styles['sortButton']}>
            sort
          </span>
        </div>
      </div>
      <div>
        {courtCases?.map((courtCase: CourtCaseDto) => {
          return (
            <div className={styles['invoice-menus']}>
              {courtCase.caseNumber} - {courtCase.plaintiff} vs{' '}
              {courtCase.defendant}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvoiceMenu;
