import { Invoice } from "@cms-models";
import { PrismaClient } from "@prisma/client";
export declare class InvoicesRespository {
    private prisma;
    constructor(prisma: PrismaClient);
    AddInvoice(invoice: Invoice): Promise<Invoice | null>;
    EditInvoice(invoice: Invoice): Promise<Invoice | null>;
    GetInvoiceById(id: string, userId: string): Promise<Invoice | null>;
    GetInvoiceByInvoiceNumber(invoiceNumber: string, userId: string): Promise<Invoice[] | null>;
    GetInvoiceByCaseNumber(caseNumber: string, userId: string): Promise<Invoice[] | null>;
    DeleteInvoice(id: string, userId: string): Promise<Invoice | null>;
}
