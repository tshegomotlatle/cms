import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty } from "class-validator";

export class RefreshTokenRequest {
    @ApiProperty()
    @IsAlphanumeric()
    @IsNotEmpty()
    refreshToken!: string;
}