/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from '../models/AccessTokenResponse';
import type { EmailRequest } from '../models/EmailRequest';
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import type { UpdatePasswordRequest } from '../models/UpdatePasswordRequest';
import type { User } from '../models/User';
import type { UserEditRequest } from '../models/UserEditRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * @param email User email
     * @returns User Returns user
     * @throws ApiError
     */
    public static authenticationApiControllerGetUser(
        email: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authentication/user/{email}',
            path: {
                'email': email,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns AccessTokenResponse Returns access token and refresh token
     * @throws ApiError
     */
    public static authenticationApiControllerLogin(
        requestBody: UserLoginRequest,
    ): CancelablePromise<AccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid credentials`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns AccessTokenResponse Returns access token and refresh token
     * @throws ApiError
     */
    public static authenticationApiControllerRegister(
        requestBody: UserRegisterRequest,
    ): CancelablePromise<AccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `User already exists`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns AccessTokenResponse Returns access token and refresh token
     * @throws ApiError
     */
    public static authenticationApiControllerRefreshToken(
        requestBody: RefreshTokenRequest,
    ): CancelablePromise<AccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid refresh token`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean Returns true if email exists
     * @throws ApiError
     */
    public static authenticationApiControllerCheckEmail(
        requestBody: EmailRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/check-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns boolean Returns true if user is edited
     * @throws ApiError
     */
    public static authenticationApiControllerEditUser(
        requestBody: UserEditRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/authentication/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns boolean Returns true if password is updated
     * @throws ApiError
     */
    public static authenticationApiControllerUpdatePassword(
        requestBody: UpdatePasswordRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/authentication/update-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
