import { useEffect, useState } from 'react';
import styles from './add-court-case.module.scss';
import Stepper from 'bs-stepper';
import {
  GetCaseOutcomes,
  GetCaseTypes,
} from '../../../../../constants/src/lib/constants';
/* eslint-disable-next-line */
export interface AddCourtCaseProps {}

export function AddCourtCase(props: AddCourtCaseProps) {
  const caseOutcomes = GetCaseOutcomes();
  const caseTypes = GetCaseTypes();

  return (
    <div className={styles['stepper-1']}>
      <div className="form-group">
        <label htmlFor="caseNumber">Case Number</label>
        <input
          type="text"
          className="form-control"
          id="caseNumber"
          placeholder="Enter case number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="plaintiff">Plaintiff</label>
        <input
          type="text"
          className="form-control"
          id="plaintiff"
          placeholder="Enter plaintiff full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="defendant">Defendant</label>
        <input
          type="text"
          className="form-control"
          id="defendant"
          placeholder="Enter defendant full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="defendant">Location</label>
        <input
          type="text"
          className="form-control"
          id="defendant"
          placeholder="Enter defendant full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="caseStatus">Case Status</label>
        <select className="form-control">
          {caseOutcomes.map((type, index) => {
            return (
              <option key={index} value="type">
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="caseStatus">Type</label>
        <select className="form-control">
          {caseTypes.map((type, index) => {
            return (
              <option key={index} value="type">
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="lawyer">Instructing Attorney</label>
        <select className="form-control">
          <option value="">TEST 1</option>
          <option value="">TEST 2</option>
          <option value="">TEST 3</option>
        </select>
      </div>
    </div>
  );
}

export default AddCourtCase;
