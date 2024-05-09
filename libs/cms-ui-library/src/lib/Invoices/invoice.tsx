import InvoiceFooter from './Footer/invoice-footer';
import InvoiceHeader from './Header/invoice-header';
import styles from './invoice.module.scss';

/* eslint-disable-next-line */
export interface InvoiceProps {}

export function Invoice(props: InvoiceProps) {
  return (
    <div className={styles['container']}>
      <InvoiceHeader />
      <div className={styles['table']}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className={styles['date']}>Date</th>
              <th scope="col" className={styles['particulars']}>Particulars</th>
              <th scope="col" className={styles['amount']}>Fee/Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td colSpan={3}>Total</td>
              <td>R80 000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <InvoiceFooter />
    </div>
  );
}

export default Invoice;
