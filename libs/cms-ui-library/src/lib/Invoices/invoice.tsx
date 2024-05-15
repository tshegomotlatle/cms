import InvoiceFooter from './footer/invoice-footer';
import InvoiceHeader from './header/invoice-header';
import InvoiceMenu from './invoice-menu/invoice-menu';
import styles from './invoice.module.scss';

/* eslint-disable-next-line */
export interface InvoiceProps {}

export function Invoice(props: InvoiceProps) {

  return (
    <div className={styles['container']}>
      <div className={styles['invoice-menu']}>
        <InvoiceMenu/>
      </div>
      <div className={styles['invoice']}>
        <div className={styles['invoice-container']}>
          <InvoiceHeader />
          <div className={styles['table']}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className={styles['date']}>
                    Date
                  </th>
                  <th scope="col" className={styles['particulars']}>
                    Particulars
                  </th>
                  <th scope="col" className={styles['amount']}>
                    Fee/Amount
                  </th>
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
      </div>
    </div>
  );
}

export default Invoice;
