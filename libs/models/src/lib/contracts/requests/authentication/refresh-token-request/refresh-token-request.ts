import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty } from "class-validator";

export class RefreshTokenRequest {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email!: string

    @ApiProperty()
    @IsAlphanumeric()
    @IsNotEmpty()
    refreshToken!: string;
}