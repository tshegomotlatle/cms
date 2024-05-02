import { SetStateAction, useEffect, useState } from 'react';
import styles from './test-component.module.scss';
import { extname } from 'path';
import { CourtCase } from '@cms-models';

/* eslint-disable-next-line */
export interface TestComponentProps {}

export function TestComponent(props: TestComponentProps) {
  const [file, setFile] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [courtCases, setCourtCases] = useState<CourtCase[]>([]);


  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API_URL + 'api/court-cases/getAllCases', {
      method: 'POST',
      body: JSON.stringify({
        userId: '1',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
      },
    })
      .then((res) => res.json())
      .then((json: CourtCase[]) => {
        json.forEach((courtCase, index) => {
          courtCase.date = courtCase.date;
          courtCase.dateCreated = courtCase.dateCreated;
        });
        setCourtCases(json);
        return;
      });
  }, []);

  const handleFileNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFileName(event?.target.value);
  };

  const handleCaseNumberChange = (event: any) => {
    setCaseNumber(event.target.value);
  }

  const handleFileUpload = (event: {
    target: {
      files: any;
      value: any;
    };
  }) => {
    setFile(event?.target.files[0]);
  };

  const handleFileUploadSubmit = async () => {
    if (file != null && fileName !== "") {
      const fileExtension = file.name.split('.')[file.name.split('.').length - 1];
      const newName = `${fileName}.${fileExtension}`;

      const formData = new FormData();
      formData.append('file', file!, newName);
      formData.append('caseNumber', caseNumber);

      await fetch(API_URL + 'api/documents/UploadDocuments', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((res: any) => {
          console.log(res);
        });
    }
  };

  return (
    <div>
      <div className="mb-2">
        <select onChange={handleCaseNumberChange}>
          {courtCases.map((courtCase, index) => {
            return (
              <option key={index} value={courtCase.caseNumber}>
                {courtCase.caseNumber} - {courtCase.defendant} vs{' '}
                {courtCase.plaintiff}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles['container']}>
        <input
          type="file"
          name="fileUpload"
          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
          id="fileUpload"
          onChange={handleFileUpload}
        />
      </div>
      <div>
        <section>
          File details:
          <input
            type="text"
            id="fileName"
            onChange={handleFileNameChange}
            name="files[]"
            multiple
          />
        </section>
        <div>{file?.name}</div>
      </div>
      <button type="submit" onClick={handleFileUploadSubmit}>
        Upload
      </button>
    </div>
  );
}

export default TestComponent;
