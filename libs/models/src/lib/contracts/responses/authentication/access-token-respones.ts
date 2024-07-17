import { ApiResponseProperty } from "@nestjs/swagger"

export class AccessTokenResponse {
    @ApiResponseProperty()
    accessToken!: string

    @ApiResponseProperty()
    refreshToken!: string
}