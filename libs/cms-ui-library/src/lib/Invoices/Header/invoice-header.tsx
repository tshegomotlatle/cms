import styles from './invoice-header.module.scss';

/* eslint-disable-next-line */
export interface InvoiceHeaderProps {
  representing?: string;
  to?: string;
  reference?: string;
  type?: string | null;
}

export function InvoiceHeader(props: InvoiceHeaderProps) {
  return (
    <div className={styles['container']}>
      <div>
        <h1>ADV. T.P Motlatle</h1>
        <h6>Date of admission as an Attorney: 19th May 1993</h6>
        <h6>Date of admission as an Advocate: 25th February 2016</h6>
      </div>
      <div className={styles['personalInformation']}>
        <div className={styles['address']}>
          25 Spirngbok Street <br />
          Groblersdal <br />
          0470
        </div>
        <div className={styles['email']}>tumelom@lantic.net</div>
        <div className={styles['contactNumbers']}>
          <div>
            <b>Tel: </b> 015 291 2116 <br />
          </div>
          <div>
            <b>Fax: </b> 086 616 9792 <br />
          </div>
          <div>
            <b>Mobile: </b> 082 803 4402
          </div>
        </div>
      </div>
      <div>Invoice No: 003/2022</div>
      <div className={styles['divider']}></div>
      <div className={styles['recipentContainer']}>
        <div className={styles['recipient']}>TO: {props.to}</div>
        <div className={styles['reference']}>REF:{props.reference}</div>
      </div>
      <div className={styles['divider']}></div>
      <div className={styles['recipentContainer']}>
        <h3>
          RE: {props.representing} / {props.type}
        </h3>
      </div>
      <div className={styles['divider']}></div>
    </div>
  );
}

export default InvoiceHeader;
