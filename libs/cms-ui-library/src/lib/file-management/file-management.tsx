import { CourtCase } from '@prisma/client';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect, SetStateAction } from 'react';
import styles from './file-management.module.scss';

/* eslint-disable-next-line */
export interface FileManagementProps {}

export function FileManagement(props: FileManagementProps) {
   const [file, setFile] = useState<Blob | null>(null);
   const [fileName, setFileName] = useState('');
   const [caseNumber, setCaseNumber] = useState('');
   const [courtCases, setCourtCases] = useState<CourtCase[]>([]);

   useEffect(() => {
     axios
       .post('/court-cases/getAllCases')
       .then((response: AxiosResponse) => {
         setCourtCases(response.data);
       });
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
     if (file != null && fileName !== '') {
       const fileExtension =
         file.name.split('.')[file.name.split('.').length - 1];
       const newName = `${fileName}.${fileExtension}`;

       const formData = new FormData();
       formData.append('file', file, newName);
       formData.append('caseNumber', caseNumber);

       axios
         .post('/documents/UploadDocuments', formData)
         .then((response) => {
           console.log(response);
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

export default FileManagement;
