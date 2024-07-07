import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class IdRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id!: string;
}
