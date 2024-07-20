/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddLawyerRequest } from '../models/AddLawyerRequest';
import type { UpdateLawyerRequest } from '../models/UpdateLawyerRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LawyerService {
    /**
     * @param id Lawyer id
     * @returns void
     * @throws ApiError
     */
    public static lawyerApiControllerGetLawyerById(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/lawyer/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Lawyer not found`,
            },
        });
    }
    /**
     * @param id Lawyer id
     * @returns boolean
     * @throws ApiError
     */
    public static lawyerApiControllerDeleteLawyer(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/lawyer/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Lawyer not found`,
            },
        });
    }
    /**
     * @param email Lawyer email
     * @returns void
     * @throws ApiError
     */
    public static lawyerApiControllerGetLawyerByEmail(
        email: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/lawyer/email/{email}',
            path: {
                'email': email,
            },
            errors: {
                404: `Lawyer not found`,
            },
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    public static lawyerApiControllerGetAllLawyers(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/lawyer/all',
            errors: {
                404: `Lawyers not found`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static lawyerApiControllerAddLawyer(
        requestBody: AddLawyerRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/lawyer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Lawyer already exists`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static lawyerApiControllerUpdateLawyer(
        requestBody: UpdateLawyerRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/lawyer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Lawyer not found`,
            },
        });
    }
}
