import { ApiProperty } from "@nestjs/swagger";
import { AddLawyerRequest } from "../add-lawyer/add-lawyer-request";
import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdateLawyerRequest extends AddLawyerRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id!: string;
}