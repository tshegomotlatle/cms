import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class EmailRequest{
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email!: string
}