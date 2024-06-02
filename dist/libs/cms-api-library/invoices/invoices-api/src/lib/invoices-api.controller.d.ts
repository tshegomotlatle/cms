import { InvoicesService } from '@cms-invoices-service';
import { GetInvoicesByCaseNumberRequest, GetInvoicesByIdRequest, GetInvoicesByInvoiceNumberRequest, Invoice } from '@cms-models';
export declare class InvoicesApiController {
    private invoiceService;
    constructor(invoiceService: InvoicesService);
    add(body: Invoice): Promise<Invoice | null>;
    delete(body: GetInvoicesByIdRequest): Promise<Invoice | null>;
    edit(body: Invoice): Promise<Invoice | null>;
    getInvoiceById(body: GetInvoicesByIdRequest): Promise<Invoice | null>;
    getInvoiceByInvoiceNumber(body: GetInvoicesByInvoiceNumberRequest): Promise<Invoice[] | null>;
    getInvoiceByCaseNumber(body: GetInvoicesByCaseNumberRequest): Promise<Invoice[] | null>;
}
