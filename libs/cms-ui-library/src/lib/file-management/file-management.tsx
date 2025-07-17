import { useState, useEffect, SetStateAction } from 'react';
import styles from './file-management.module.scss';
import {
  ApiError,
  CourtCase,
  CourtCasesService,
  DocumentsService,
} from '../cms-api/v1';

/* eslint-disable-next-line */
export interface FileManagementProps {}

export function FileManagement(props: FileManagementProps) {
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [fileName, setFileName] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [courtCases, setCourtCases] = useState<CourtCase[]>([]);

  useEffect(() => {
    CourtCasesService.courtCasesApiControllerGetAllCases().then(
      (response: CourtCase[]) => {
        if (response) setCourtCases(response);
      }
    );
  }, []);

  const handleFileNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFileName(event?.target.value);
  };

  const handleCaseNumberChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCaseNumber(event.target.value);
  };

  const handleFileUpload = (event: {
    target: {
      files: any;
      value: string;
    };
  }) => {
    setFile(event?.target.files[0]);
  };

  const handleFileUploadSubmit = async () => {
    DocumentsService.documentsApiControllerUploadDocuments({
      caseNumber: caseNumber,
      file: file,
    })
      .then(() => {
        alert('Documents uploaded');
      })
      .catch((error: ApiError) => {
        alert("Documents couldn't be uploaded");
      });
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

export default FileManagement;
