import { AccessTokenGuard } from '@cms-authetication-api';
import { InvoicesService } from '@cms-invoices-service';
import { EditInvoice, GetInvoicesByInvoiceNumberRequest, IdRequest, Invoice } from '@cms-models';
import { BadRequestException, Body, Controller, Delete, Get, Headers, NotFoundException, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiFoundResponse, ApiNotFoundResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags("invoices")
@Controller('invoices')
@ApiBearerAuth()
export class InvoicesApiController {

    constructor(private invoiceService: InvoicesService) { }

    @UseGuards(AccessTokenGuard)
    @Get('')
    @ApiFoundResponse({ type: Invoice, description: 'The invoice with the specified id' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified ID was not found.' })
    @ApiQuery({ name: 'id', type: String })
    Get(@Query() query: IdRequest, @Headers() headers: { authorization: string }): Promise<Invoice | NotFoundException> {
        return this.invoiceService.GetInvoiceById(query.id, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Get('invoice-number')
    @ApiFoundResponse({ type: Invoice, description: 'The invoice with the specified invoice number' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified invoice number was not found.' })
    @ApiQuery({ name: 'invoice-number', type: String })
    GetByInvoiceNumber(@Body() body: GetInvoicesByInvoiceNumberRequest, @Headers() headers: { authorization: string }): Promise<Invoice[] | NotFoundException> {
        return this.invoiceService.GetInvoiceByInvoiceNumber(body.invoiceNumber, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Post()
    @ApiFoundResponse({ type: Boolean, description: 'The invoice has been added' })
    @ApiBadRequestResponse({ description: 'An error occured while adding the invoice' })
    Add(@Body() body: Invoice, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.invoiceService.AddInvoice(body, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Delete()
    @ApiFoundResponse({ type: Boolean, description: 'The invoice has been deleted' })
    @ApiBadRequestResponse({ description: 'The invoice doesnt not exist' })
    Delete(@Body() body: IdRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.invoiceService.DeleteInvoice(body.id, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Put()
    @ApiFoundResponse({ type: Boolean, description: 'The invoice has been deleted' })
    @ApiBadRequestResponse({ description: 'The invoice doesnt not exist' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified ID was not found.' })
    Edit(@Body() body: EditInvoice, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException | NotFoundException> {
        return this.invoiceService.EditInvoice(body, headers.authorization);
    }
}
