/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Documents } from '../models/Documents';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentsService {
    /**
     * @param id Document id
     * @returns Documents
     * @throws ApiError
     */
    public static documentsApiControllerGetDocumentsByCaseNumber(
        id: string,
    ): CancelablePromise<Array<Documents>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/documents/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Documents not found`,
            },
        });
    }
    /**
     * @param id Document id
     * @returns boolean Document deleted
     * @throws ApiError
     */
    public static documentsApiControllerDeleteDocument(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/documents/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Documents not found`,
            },
        });
    }
    /**
     * @param formData
     * @returns boolean Document uploaded
     * @throws ApiError
     */
    public static documentsApiControllerUploadDocuments(
        formData: {
            caseNumber?: string;
            file?: Blob;
        },
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/documents',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Documents not found`,
            },
        });
    }
}
