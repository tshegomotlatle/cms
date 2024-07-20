import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './court-cases.module.scss';
import { CourtCase, CourtCasesService } from '../../cms-api/v1';
/* eslint-disable-next-line */
export interface CourtCasesProps {}

export function CourtCases(props: CourtCasesProps) {
  const [courtCases, setCourtCases] = useState<CourtCase[]>([]);
  const [searchBarInput, setSearchBarInput] = useState('');

  useEffect(() => {
    CourtCasesService.courtCasesApiControllerGetAllCases()
      .then((response: Array<CourtCase>) => {
        if (response) setCourtCases(response);
        return;
      })
      .catch((response) => {
        throw response;
      });
  }, []);

  const searchCases = (e: { target: { value: string } }) => {
    setSearchBarInput(e.target.value);
    console.log(searchBarInput);
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
          <a href="/add-court-case">
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
      <table className="table table-hover courtCaseTable">
        <thead>
          <tr>
            <th scope="col">Case Number</th>
            <th scope="col">Defendent</th>
            <th scope="col">Plaintiff</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Next Date</th>
            <th scope="col">Created</th>
            <th scope="col">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {courtCases.map((courtCase: CourtCase, i) => (
            <tr key={i}>
              <th scope="row">{courtCase.caseNumber}</th>
              <td>{courtCase.defendant}</td>
              <td>{courtCase.plaintiff}</td>
              <td>{courtCase.status}</td>
              <td>{courtCase.type}</td>
              <td>{'INSERT NEXT DATE HERE'}</td>
              <td>{courtCase.dateCreated.toLocaleString().split('T')[0]}</td>
              <td>{courtCase.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourtCases;
