import styles from './add-invoice.module.scss';

/* eslint-disable-next-line */
export interface AddInvoiceProps {}

export function AddInvoice(props: AddInvoiceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddInvoice!</h1>
    </div>
  );
}

export default AddInvoice;
