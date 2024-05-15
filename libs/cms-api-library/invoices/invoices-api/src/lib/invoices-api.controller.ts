import { InvoicesService } from '@cms-invoices-service';
import { GetInvoicesByCaseNumberRequest, GetInvoicesByIdRequest, GetInvoicesByInvoiceNumberRequest, Invoice } from '@cms-models';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("invoices")
@Controller('invoices')
export class InvoicesApiController {

    constructor(private invoiceService : InvoicesService){}

    @Post('add')
    add(@Body() body : Invoice) : Promise<Invoice | null>{
        return this.invoiceService.AddInvoice(body);
    }

    @Post('delete')
    delete(@Body() body: GetInvoicesByIdRequest) : Promise<Invoice | null>{
        return this.invoiceService.DeleteInvoice(body.id, body.accessToken);
    }

    @Post('edit')
    edit(@Body() body: Invoice) : Promise<Invoice | null>{
        return this.invoiceService.EditInvoice(body);
    }

    @Post('getInvoiceById')
    getInvoiceById(@Body() body: GetInvoicesByIdRequest) : Promise<Invoice | null>{
        return this.invoiceService.GetInvoiceById(body.id, body.accessToken);
    }

    @Post('getInvoiceByInvoiceNumber')
    getInvoiceByInvoiceNumber(@Body() body: GetInvoicesByInvoiceNumberRequest) : Promise<Invoice[] | null>{
        return this.invoiceService.GetInvoiceByInvoiceNumber(body.invoiceNumber, body.accessToken);
    }

    @Post('getInvoiceByCaseNumber')
    getInvoiceByCaseNumber(@Body() body: GetInvoicesByCaseNumberRequest) : Promise<Invoice[] | null>{
        return this.invoiceService.GetInvoiceByCaseNumber(body.caseNumber, body.accessToken);
    }
}
