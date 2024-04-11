import { SetStateAction, useState } from 'react';
import styles from './test-component.module.scss';
import { extname } from 'path';

/* eslint-disable-next-line */
export interface TestComponentProps {}

export function TestComponent(props: TestComponentProps) {
  const [file, setFile] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  const handleFileNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFileName(event?.target.value);
  };

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
