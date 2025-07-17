import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsNotEmpty, IsPhoneNumber, IsUUID } from "class-validator";

export class UpdateLawyerRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    name!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    surname!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber('ZA')
    mobileNumber!: string
}