import { ApiProperty } from "@nestjs/swagger";

export class Invoice {
    
    @ApiProperty()
    id?: string;
    
    @ApiProperty()
    invoiceNumber!: string | null;
    
    @ApiProperty()
    name!: string;
    
    @ApiProperty()
    date!: Date;
    
    @ApiProperty()
    hours!: number;
    
    @ApiProperty()
    costPerHour!: number;
    
    @ApiProperty()
    caseNumber!: string;
    
    @ApiProperty()
    userId!: string;
}
