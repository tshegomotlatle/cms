import { CommonFunctionsService } from '@cms-common-functions';
import { InvoicesRespository } from '@cms-invoices-repository';
import { EditInvoice, Invoice, UserToken } from '@cms-models';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class InvoicesService {

    constructor(
        private invoiceRepository: InvoicesRespository,
        private currentUserService: CommonFunctionsService
    ) {

    }

    public async AddInvoice(newInvoice: Invoice, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        newInvoice.userId = user?.userId || "";
        Logger.log(newInvoice);
        const invoice = await this.invoiceRepository.AddInvoice(newInvoice, user?.userId || "");
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

    public async EditInvoice(newInvoice: EditInvoice, accessToken: string): Promise<boolean | BadRequestException | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.EditInvoice(newInvoice, user?.userId || "");
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

    public async GetInvoiceById(id: string, accessToken: string): Promise<Invoice | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.GetInvoiceById(id, user?.userId || "");
        if (invoice) {
            return invoice
        }
        else {
            return new NotFoundException()
        }
    }

    public async GetInvoiceByInvoiceNumber(invoiceNumber: string, accessToken: string): Promise<Invoice[] | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, user?.userId || "");
        if (invoice) {
            return invoice
        }
        else {
            return new NotFoundException()
        }
    }

    public async DeleteInvoice(id: string, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const invoice = await this.invoiceRepository.DeleteInvoice(id, user?.userId || "");
        if (invoice) {
            return true
        }
        else {
            return new BadRequestException()
        }
    }

}
