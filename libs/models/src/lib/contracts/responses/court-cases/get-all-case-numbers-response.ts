import { ApiResponse, ApiResponseProperty } from "@nestjs/swagger";

export class GetAllCaseNumbersRespone {
    @ApiResponseProperty()
    caseNumbers!: string[];
}