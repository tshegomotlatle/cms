import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, IsDate, IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class Invoice {

    @IsNotEmpty()
    @IsAlphanumeric()
    @ApiProperty()
    invoiceNumber!: string | null;

    @IsNotEmpty()
    @IsAlpha()
    @ApiProperty()
    name!: string;

    @IsDate()
    @ApiProperty()
    date!: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    hours!: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    costPerHour!: number;

    @IsUUID()
    @IsNotEmpty()
    @ApiProperty()
    caseId!: string;

    @IsUUID()
    @IsNotEmpty()
    @ApiProperty()
    userId!: string;
}
