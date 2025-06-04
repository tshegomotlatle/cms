import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class KeycloakRegisterRequest {
    @ApiProperty()
    @IsNotEmpty()
    userId!: string;

    @ApiProperty()
    @IsNotEmpty()
    realm!: string;
}
