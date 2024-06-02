import { InvoicesRespository } from '@cms-invoices-repository';
import { Invoice } from '@cms-models';
import { JwtService } from '@nestjs/jwt';
export declare class InvoicesService {
    private invoiceRepository;
    private jwtService;
    constructor(invoiceRepository: InvoicesRespository, jwtService: JwtService);
    AddInvoice(invoice: Invoice): Promise<Invoice | null>;
    EditInvoice(invoice: Invoice): Promise<Invoice | null>;
    GetInvoiceById(id: string, accessToken: string): Promise<Invoice | null>;
    GetInvoiceByInvoiceNumber(invoiceNumber: string, accessToken: string): Promise<Invoice[] | null>;
    GetInvoiceByCaseNumber(caseNumber: string, accessToken: string): Promise<Invoice[] | null>;
    DeleteInvoice(id: string, accessToken: string): Promise<Invoice | null>;
    private ValidateInvoice;
}
