import { ApiProperty } from "@nestjs/swagger";

export class GetDocumentRequest {
    @ApiProperty()
    caseId!: string;
}
