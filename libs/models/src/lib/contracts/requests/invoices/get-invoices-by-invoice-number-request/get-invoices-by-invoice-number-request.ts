import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNotEmpty } from "class-validator";

export class GetInvoicesByInvoiceNumberRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    invoiceNumber!: string;
}
