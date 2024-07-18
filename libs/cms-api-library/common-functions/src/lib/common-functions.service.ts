import { Injectable } from '@nestjs/common';
import { UserToken } from '@cms-models';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CommonFunctionsService {
    constructor(private jwtService: JwtService) { }

    /**
     * Retrieves the user ID from the provided JWT access token.
     *
     * @param {string} accessToken - The JWT access token.
     * @returns {string | null} The user ID, or null if the token is invalid.
     */
    public GetUserToken(accessToken: string): UserToken | null {
        accessToken = accessToken.replace('Bearer ', '');
        return this.jwtService.decode(accessToken) as UserToken | null;
    }
}
