/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourtCase } from '../models/CourtCase';
import type { GetAllCaseNumbersRespone } from '../models/GetAllCaseNumbersRespone';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourtCasesService {
    /**
     * @param id
     * @returns CourtCase The court case with the specified ID.
     * @throws ApiError
     */
    public static courtCasesApiControllerGetCaseById(
        id: string,
    ): CancelablePromise<CourtCase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/court-cases/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The court case with the specified ID was not found.`,
            },
        });
    }
    /**
     * @returns GetAllCaseNumbersRespone The list of case numbers.
     * @throws ApiError
     */
    public static courtCasesApiControllerGetAllCaseNumbers(): CancelablePromise<GetAllCaseNumbersRespone> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/court-cases/caseNumbers/all',
            errors: {
                404: `The list of case numbers is empty.`,
            },
        });
    }
    /**
     * @param caseNumber The case number of the court case.
     * @returns CourtCase The court case with the specified case number.
     * @throws ApiError
     */
    public static courtCasesApiControllerGetCaseByCaseNumber(
        caseNumber: string,
    ): CancelablePromise<CourtCase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/court-cases/case-number/{caseNumber}',
            path: {
                'caseNumber': caseNumber,
            },
            errors: {
                404: `The case with the case number was not found`,
            },
        });
    }
    /**
     * @returns CourtCase The list of court cases.
     * @throws ApiError
     */
    public static courtCasesApiControllerGetAllCases(): CancelablePromise<Array<CourtCase>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/court-cases/cases/all',
            errors: {
                404: `The list of court cases is empty.`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean True if the court case was added successfully.
     * @throws ApiError
     */
    public static courtCasesApiControllerAdd(
        requestBody: CourtCase,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/court-cases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The specified case number already exists.`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean True if the court case was edited successfully.
     * @throws ApiError
     */
    public static courtCasesApiControllerEdit(
        requestBody: CourtCase,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/court-cases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The specified case number does not exist.`,
            },
        });
    }
    /**
     * @param caseNumber The case number of the court case.
     * @returns boolean True if the court case was deleted successfully.
     * @throws ApiError
     */
    public static courtCasesApiControllerDelete(
        caseNumber: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/court-cases/{caseNumber}',
            path: {
                'caseNumber': caseNumber,
            },
            errors: {
                400: `The specified case number does not exist.`,
            },
        });
    }
}
