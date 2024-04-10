import { Controller, Get } from '@nestjs/common';

@Controller('authentication')
export class AuthenticationApiController {

    @Get("")
    async Ping(): Promise<{ health: string }> {
        return { health: "Healthy" }
    }
}
