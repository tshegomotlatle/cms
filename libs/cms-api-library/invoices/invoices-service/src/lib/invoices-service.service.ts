import { InvoicesRespository } from '@cms-invoices-repository';
import { Invoice } from '@cms-models';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class InvoicesService {

    constructor(private invoiceRepository : InvoicesRespository,
        private jwtService : JwtService
    )
    {

    }

    public async AddInvoice(invoice: Invoice): Promise<Invoice | null> {
        if (!this.ValidateInvoice(invoice))
            return null;

        Logger.log(invoice);
        return await this.invoiceRepository.AddInvoice(invoice);
    }

    public async EditInvoice(invoice: Invoice): Promise<Invoice | null> {
        if (!this.ValidateInvoice(invoice))
            return null;

        return await this.invoiceRepository.EditInvoice(invoice);
    }

    public async GetInvoiceById(id: string, accessToken: string): Promise<Invoice | null> {
        if (accessToken === "" || id === "")
            return null

        const user: { userId: string, email: string } = this.jwtService.decode(accessToken);

        return this.invoiceRepository.GetInvoiceById(id, user.userId);
    }

    public async GetInvoiceByInvoiceNumber(invoiceNumber: string, accessToken: string): Promise<Invoice[] | null> {
        if (accessToken === "" || invoiceNumber === "")
            return null

        const user: { userId: string, email: string } = this.jwtService.decode(accessToken);

        return this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, user.userId);
    }

    public async DeleteInvoice(id: string, accessToken: string): Promise<Invoice | null> {
        if (id === "" || accessToken === "")
            return null

        const user: { userId: string, email: string } = this.jwtService.decode(accessToken);

        return this.invoiceRepository.DeleteInvoice(id, user.userId);
    }


    private ValidateInvoice(invoice : Invoice) : boolean
    {
        if (invoice === null)
            return false;
        if (invoice.caseId === "")
            return false;
        if (invoice.name === "")
            return false;
        if (invoice.hours === 0)
            return false;
        if (invoice.date === null)
            return false;
        if (invoice.userId === "")
            return false;

        return true;
    }
}
