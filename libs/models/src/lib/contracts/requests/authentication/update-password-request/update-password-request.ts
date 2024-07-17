import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsStrongPassword } from "class-validator";

export class UpdatePasswordRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    password!: string;
}
