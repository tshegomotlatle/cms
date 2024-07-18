import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, IsDate, IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class EditInvoice {

    @IsUUID()
    @IsNotEmpty()
    @ApiProperty()
    id!: string;

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
}
