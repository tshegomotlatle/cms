import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class KeycloakRegisterRequest {
    @ApiProperty({ description: "Keycloak user ID" })
    @IsNotEmpty()
    @IsString()
    userId!: string;

    @ApiProperty({ description: "Realm the user belongs to" })
    @IsNotEmpty()
    @IsString()
    realm!: string;

    @ApiProperty({ description: "User's email address" })
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @ApiProperty({ description: "User's first name" })
    @IsNotEmpty()
    @IsString()
    name!: string;

    @ApiProperty({ description: "User's last name" })
    @IsNotEmpty()
    @IsString()
    surname!: string;

    @ApiProperty({ description: "User's mobile number", required: false })
    @IsOptional()
    @IsString()
    mobileNumber?: string;

    @ApiProperty({ description: "User's password (optional — not provided by Keycloak)", required: false })
    @IsOptional()
    @IsString()
    password?: string;
}
