import styles from './invoice-footer.module.scss';

/* eslint-disable-next-line */
export interface InvoiceFooterProps {}

export function InvoiceFooter(props: InvoiceFooterProps) {

  return (
    <div className={styles['container']}>
      <div className={styles['signature']}>
        <div>Yours Faithfully</div>
        <div className='mt-5'>
          <div className={styles['signatureLine']}></div>
          <div className={styles['information']}>
            Adv T.P Motlatle <br />
            Date: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className={styles['bankingDetails']}>
        Banking Details <br />
        Account Name: Adv TP Motlatle <br />
        Bank: FNB <br />
        Branch Code: 260 147 <br />
        Account No: 62655759185
      </div>
    </div>
  );
}

export default InvoiceFooter;
