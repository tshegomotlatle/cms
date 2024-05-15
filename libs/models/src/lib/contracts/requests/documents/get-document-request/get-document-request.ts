import { ApiProperty } from "@nestjs/swagger";

export class GetDocumentRequest {
    @ApiProperty()
    caseNumber!: string;
}
