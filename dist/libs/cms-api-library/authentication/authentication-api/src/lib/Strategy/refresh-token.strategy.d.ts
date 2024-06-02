import { Strategy } from 'passport-jwt';
import { Request } from 'express';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    validate(req: Request, payload: {
        userId: string;
        username: string;
    }): {
        refreshToken: string | undefined;
        userId: string;
        username: string;
    };
}
export {};
