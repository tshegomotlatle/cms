import { useEffect, useState } from 'react';
import {
  ApiError,
  CourtCase,
  CourtCasesService,
  Invoice,
  InvoicesService,
} from '../cms-api/v1';
import styles from './invoice.module.scss';

/* eslint-disable-next-line */

export function InvoiceComponent() {
  const [courtCases, setCourtCases] = useState<CourtCase[]>([]);
  const [courtCaseNumbers, setCourtCaseNumbers] = useState<CourtCase>(
    {} as CourtCase
  );
  const [invoice, setInvoice] = useState<Invoice>({} as Invoice);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isAddInvoice, setIsAddInvoice] = useState<boolean>(false);
  let sum = 0;

  useEffect(() => {
    CourtCasesService.courtCasesApiControllerGetAllCases().then(
      (response: CourtCase[]) => {
        setCourtCases(response);
      }
    );
  }, []);

  // Input change handlers
  const handleDateChange = (event: { target: { value: string } }) => {
    setInvoice({
      ...invoice,
      date: new Date(event.target.value).toDateString(),
    });
  };

  const handleCaseNumberChange = (event: { target: { value: string } }) => {};

  const handleDescriptionChange = (event: { target: { value: string } }) => {
    setInvoice({
      ...invoice,
      name: event.target.value,
    });
  };

  const handleHoursChange = (event: { target: { value: string } }) => {
    setInvoice({
      ...invoice,
      hours: parseFloat(event.target.value),
    });
  };

  const handleFeeChange = (event: { target: { value: string } }) => {
    setInvoice({
      ...invoice,
      costPerHour: parseFloat(event.target.value),
    });
  };

  const handleChangeView = () => {
    setIsAddInvoice(!isAddInvoice);
  };

  const handleSearchBarInputChange = (event: { target: { value: string } }) => {
    console.log(event?.target.value);
  };

  const invoiceFooter = () => {
    return (
      <div className={styles['container-footer']}>
        <div className={styles['signature']}>
          <div>Yours Faithfully</div>
          <div className="mt-5">
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
  };

  const handleCaseNumberClick = async (value: string) => {
    InvoicesService.invoicesApiControllerGetByInvoiceNumber(value)
      .then(async (response: Invoice[]) => {
        setInvoices(response);
        await setCourtCaseObject(value);
      })
      .catch((error: ApiError) => {
        console.log(error);
      });
  };

  const setCourtCaseObject = async (value: string) => {
    CourtCasesService.courtCasesApiControllerGetCaseByCaseNumber(value).then(
      (response: CourtCase) => {
        setCourtCaseNumbers(response);
      }
    );
  };

  const showCourtCasesComponent = () => {
    return (
      <div>
        {courtCases?.map((courtCase: CourtCase) => {
          return (
            <div
              className={styles['invoice-menus']}
              onClick={() => {
                handleCaseNumberClick(courtCase.caseNumber);
              }}
            >
              {courtCase.caseNumber} - {courtCase.plaintiff} vs{' '}
              {courtCase.defendant}
            </div>
          );
        })}
      </div>
    );
  };

  const showAddInvoiceComponent = () => {
    return (
      <div className={styles['add-invoice-container']}>
        <div className="form-group mt-2">
          <label htmlFor="lawyer">Date</label>
          <input
            id="startDate"
            className="form-control mt-2"
            type="date"
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="caseNumber">Case Number</label>
          <select
            className="form-control mt-2"
            onChange={handleCaseNumberChange}
          >
            <option defaultChecked>---Select a Case Number---</option>
            {courtCases?.map((courtCase, index) => {
              return (
                <option key={index} value={courtCase.caseNumber}>
                  {courtCase.caseNumber} - {courtCase.plaintiff} vs{' '}
                  {courtCase.defendant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="defendant">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="defendant">Hours worked</label>
          <input
            type="text"
            className="form-control"
            id="hours"
            placeholder="Enter hours worked"
            onChange={handleHoursChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="defendant">Fee Per Hour</label>
          <input
            type="text"
            className="form-control"
            id="fee"
            placeholder="Enter fee"
            onChange={handleFeeChange}
          />
        </div>
        <div className={styles['add-invoice-button-container']}>
          <button
            className="btn btn-outline-dark"
            onClick={addCourtCasesButtonClick}
          >
            Add Invoice Item
          </button>
          <button className="btn btn-outline-dark" onClick={handleChangeView}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const showMenuComponent = () => {
    if (isAddInvoice) return showAddInvoiceComponent();
    else return showCourtCasesComponent();
  };

  const addCourtCasesButtonClick = async () => {
    InvoicesService.invoicesApiControllerAdd(invoice)
      .then(() => {
        alert('Invoice Added');
      })
      .catch(() => {
        alert('Invoice Not Added');
      });
  };

  const formatMoney = (money: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'ZAR',
      currencyDisplay: 'narrowSymbol',
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(money);
  };

  const invoiceHeader = (
    representing: string,
    to: string,
    reference: string,
    type: string | null
  ) => {
    return (
      <div className={styles['container-header']}>
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
          <div className={styles['recipient']}>TO: {to}</div>
          <div className={styles['reference']}>REF:{reference}</div>
        </div>
        <div className={styles['divider']}></div>
        <div className={styles['recipentContainer']}>
          <h3>
            RE: {representing} / {type}
          </h3>
        </div>
        <div className={styles['divider']}></div>
      </div>
    );
  };

  return (
    <div className={styles['container']}>
      <div className={styles['invoice-menu']}>
        <div className={styles['courtCasesHeader']}>
          <div className={styles['search']}>
            <input
              type="text"
              className={styles['searchInput']}
              name="searchInput"
              onChange={handleSearchBarInputChange}
              placeholder="Search cases"
            />
          </div>
          <div className={styles['addCase']}>
            <div
              className={styles['addInvoiceButton']}
              onClick={handleChangeView}
            >
              <span
                className="material-symbols-outlined"
                id={styles['addButton']}
              >
                add
              </span>
            </div>
          </div>
          <div className={styles['filter']}>
            <span
              className="material-symbols-outlined"
              id={styles['filterButton']}
            >
              filter_alt
            </span>
          </div>
          <div className={styles['sort']}>
            <span
              className="material-symbols-outlined"
              id={styles['sortButton']}
            >
              sort
            </span>
          </div>
        </div>
        {showMenuComponent()}
      </div>
      <div className={styles['invoice']}>
        <div className={styles['invoice-container']}>
          {invoiceHeader(
            courtCaseNumbers?.defendant,
            courtCaseNumbers?.plaintiff,
            courtCaseNumbers.caseNumber,
            courtCaseNumbers.type
          )}
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
                {invoices.map((invoice, index) => {
                  sum += invoice.hours * invoice.costPerHour;
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{invoice.date.toString().split('T')[0]}</td>
                      <td>
                        {invoice.name} <br />
                        {invoice.hours} hours @{' '}
                        {formatMoney(invoice.costPerHour)} p/h
                      </td>
                      <td>
                        {formatMoney(invoice.hours * invoice.costPerHour)}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3}>Total</td>
                  <td>{formatMoney(sum)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {invoiceFooter()}
        </div>
      </div>
    </div>
  );
}

export default Invoice;
