import { CurrentUserService } from '@cms-authetication-api';
import { InvoicesRespository } from '@cms-invoices-repository';
import { EditInvoice, Invoice, UserToken } from '@cms-models';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class InvoicesService {

    constructor(
        private invoiceRepository: InvoicesRespository,
        private currentUserService: CurrentUserService
    ) {

    }

    public async AddInvoice(newInvoice: Invoice, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (await this.InvoiceExists(newInvoice.invoiceNumber!, user?.userId!))
            return new BadRequestException()


        newInvoice.date = new Date();
        const invoice = await this.invoiceRepository.AddInvoice(newInvoice);
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

    public async EditInvoice(newInvoice: EditInvoice, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (await this.InvoiceExists(newInvoice.invoiceNumber!, user?.userId!))
            return new BadRequestException()

        const invoice = await this.invoiceRepository.EditInvoice(newInvoice);
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

    public async GetInvoiceById(id: string, accessToken: string): Promise<Invoice | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.GetInvoiceById(id, user?.userId!);
        if (invoice) {
            return invoice
        }
        else {
            return new BadRequestException()
        }
    }

    public async GetInvoiceByInvoiceNumber(invoiceNumber: string, accessToken: string): Promise<Invoice[] | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, user?.userId!);
        if (invoice) {
            return invoice
        }
        else {
            return new BadRequestException()
        }
    }

    public async DeleteInvoice(id: string, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (await this.GetInvoiceById(id, user?.userId!))
            return new BadRequestException()

        const invoice = await this.invoiceRepository.DeleteInvoice(id, user?.userId!);
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

    public async InvoiceExists(invoiceNumber: string, userId: string): Promise<boolean> {
        const invoice = await this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, userId);

        return invoice ? true : false
    }

    public async InvoiceExistsId(id: string, userId: string): Promise<boolean> {
        const invoice = await this.invoiceRepository.GetInvoiceById(id, userId);

        return invoice ? true : false
    }
}
