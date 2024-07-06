import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: env['JWT_SECRET_REFRESH'],
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: { userId: string, email: string }) {
        let refreshToken : string | undefined = "";
        if (req.get('Authorization') !== undefined)
        {
            refreshToken = req.get('Authorization')?.replace('Bearer', '').trim();
        }
        
        return { ...payload, refreshToken };
    }
}