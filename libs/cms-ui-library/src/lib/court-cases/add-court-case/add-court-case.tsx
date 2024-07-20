import { useState } from 'react';
import styles from './add-court-case.module.scss';

import { GetCaseOutcomes, GetCaseTypes } from '../../constants/constants';

import { ApiError, CourtCase, CourtCasesService } from '../../cms-api/v1';
/* eslint-disable-next-line */
export interface AddCourtCaseProps {}

export function AddCourtCase(props: AddCourtCaseProps) {
  const caseOutcomes = GetCaseOutcomes();
  const caseTypes = GetCaseTypes();

  const [courtCase, setCourtCase] = useState<CourtCase>({} as CourtCase);

  const addCase = async () => {
    CourtCasesService.courtCasesApiControllerAdd(courtCase)
      .then(() => {
        alert('Case Added');
      })
      .catch((error: ApiError) => {
        alert('Case Not Added');
      });
  };

  const handleCaseNumberChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      caseNumber: event.target.value,
    });
  };

  const handlePlaintiffChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      plaintiff: event.target.value,
    });
  };

  const handleDefendantChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      defendant: event.target.value,
    });
  };

  const handleLocationChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      location: event.target.value,
    });
  };

  const handleStatusChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      status: event.target.value,
    });
  };

  const handleTypeChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      type: event.target.value,
    });
  };

  const handleLawyerIdChange = (event: { target: { value: string } }) => {
    setCourtCase({
      ...courtCase,
      lawyerId: event.target.value,
    });
  };

  return (
    <div className={styles['add-case-container']}>
      <div className="card">
        <div className="card-body">
          <div className={styles['input-container']}>
            <div className="form-group mt-2">
              <label htmlFor="caseNumber">Case Number</label>
              <input
                type="text"
                className="form-control"
                id="caseNumber"
                placeholder="Enter case number"
                onChange={handleCaseNumberChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="plaintiff">Plaintiff</label>
              <input
                type="text"
                className="form-control"
                id="plaintiff"
                placeholder="Enter plaintiff full name"
                onChange={handlePlaintiffChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="defendant">Defendant</label>
              <input
                type="text"
                className="form-control"
                id="defendant"
                placeholder="Enter defendant full name"
                onChange={handleDefendantChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="defendant">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter defendant full name"
                onChange={handleLocationChange}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="caseStatus">Case Status</label>
              <select className="form-control" onChange={handleStatusChange}>
                {caseOutcomes.map((outcomes, index) => {
                  return (
                    <option key={index} value={outcomes}>
                      {outcomes}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="caseStatus">Type</label>
              <select className="form-control" onChange={handleTypeChange}>
                {caseTypes.map((type, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lawyer">Instructing Attorney</label>
              <select className="form-control" onChange={handleLawyerIdChange}>
                <option value="1">TEST 1</option>
                <option value="2">TEST 2</option>
                <option value="3">TEST 3</option>
              </select>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addCase}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourtCase;
