import { useEffect, useState } from 'react';
import styles from './add-court-case.module.scss';
import { CourtCase, GetCaseOutcomes, GetCaseTypes } from '@cms-models';
/* eslint-disable-next-line */
export interface AddCourtCaseProps {}

export function AddCourtCase(props: AddCourtCaseProps) {
  const API_URL = import.meta.env.VITE_API_URL;

  const caseOutcomes = GetCaseOutcomes();
  const caseTypes = GetCaseTypes();

  const [caseNumber, setCaseNumber] = useState('');
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [lawyerId, setLaywerId] = useState('');
  const [date, setDate] = useState('');

  const addCase = async () => {
    const courtCase: CourtCase = {
      caseNumber: caseNumber,
      plaintiff: plaintiff,
      defendant: defendant,
      location: location,
      status: status,
      type: type,
      lawyerId: lawyerId,
      userId: sessionStorage.getItem('access_token')!,
      date: new Date(date),
      dateCreated: new Date(),
      outcome: null,
    };

    console.log(courtCase);

    await fetch(API_URL + 'api/court-cases/add', {
      method: 'POST',
      body: JSON.stringify(courtCase),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handleCaseNumberChange = (event: any) => {
    setCaseNumber(event.target.value);
  };

  const handlePlaintiffChange = (event: any) => {
    setPlaintiff(event.target.value);
  };

  const handleDefendantChange = (event: any) => {
    setDefendant(event.target.value);
  };

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  const handleLawyerIdChange = (event: any) => {
    setLaywerId(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
    console.log(date);
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
            <div className="form-group mt-2">
              <label htmlFor="lawyer">Next Important Date</label>
              <input
                id="startDate"
                className="form-control mt-2"
                type="datetime-local"
                onChange={handleDateChange}
              />
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
