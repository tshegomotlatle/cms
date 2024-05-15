import { ApiProperty } from "@nestjs/swagger";

export class GetInvoicesByIdRequest {
    @ApiProperty()
    id! : string;

    @ApiProperty()
    accessToken! : string;
}
