import { InvoicesService } from '@cms-invoices-service';
import { EditInvoice, GetInvoicesByInvoiceNumberRequest, IdRequest, Invoice } from '@cms-models';
import { BadRequestException, Body, Controller, Delete, Get, Headers, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags("invoices")
@Controller('invoices')
@ApiBearerAuth()
export class InvoicesApiController {

    constructor(private invoiceService: InvoicesService) { }

    @Get(':id')
    @ApiOkResponse({ type: Invoice, description: 'The invoice with the specified id' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified ID was not found.' })
    @ApiParam({ name: 'id', type: String, required: true, description: 'The invoice ID' })
    Get(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<Invoice | NotFoundException> {
        return this.invoiceService.GetInvoiceById(param.id, headers.authorization);
    }

    @Get('invoice-number/:invoiceNumber')
    @ApiOkResponse({ type: Invoice, isArray: true, description: 'The invoice with the specified invoice number' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified invoice number was not found.' })
    @ApiParam({ name: 'invoiceNumber', type: String, required: true, description: 'The invoice number' })
    GetByInvoiceNumber(@Param() param: GetInvoicesByInvoiceNumberRequest, @Headers() headers: { authorization: string }): Promise<Invoice[] | NotFoundException> {
        return this.invoiceService.GetInvoiceByInvoiceNumber(param.invoiceNumber, headers.authorization);
    }

    @Post()
    @ApiOkResponse({ type: Boolean, description: 'The invoice has been added' })
    @ApiBadRequestResponse({ description: 'An error occured while adding the invoice' })
    Add(@Body() body: Invoice, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.invoiceService.AddInvoice(body, headers.authorization);
    }

    @Put()
    @ApiOkResponse({ type: Boolean, description: 'The invoice has been deleted' })
    @ApiBadRequestResponse({ description: 'The invoice doesnt not exist' })
    @ApiNotFoundResponse({ description: 'The invoice with the specified ID was not found.' })
    Edit(@Body() body: EditInvoice, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException | NotFoundException> {
        return this.invoiceService.EditInvoice(body, headers.authorization);
    }

    @Delete(':id')
    @ApiOkResponse({ type: Boolean, description: 'The invoice has been deleted' })
    @ApiBadRequestResponse({ description: 'The invoice doesnt not exist' })
    @ApiParam({ name: 'id', type: String, required: true, description: 'The invoice ID' })
    Delete(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.invoiceService.DeleteInvoice(param.id, headers.authorization);
    }
}
