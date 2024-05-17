import { ApiProperty } from "@nestjs/swagger";

export class CourtCasesDatesDto{
    
    @ApiProperty()
    id?: string;
    
    @ApiProperty()
    caseNumber!: string;
    
    @ApiProperty()
    date!:string;
    
    @ApiProperty()
    title!:string;
    
    @ApiProperty()
    lawyerIds?: string[];
}