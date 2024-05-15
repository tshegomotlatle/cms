import { ApiProperty } from "@nestjs/swagger";

export class GetInvoicesByInvoiceNumberRequest {
    @ApiProperty()
    invoiceNumber!: string;

    @ApiProperty()
    accessToken!: string;
}
