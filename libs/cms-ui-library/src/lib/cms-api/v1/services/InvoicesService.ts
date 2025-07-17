/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditInvoice } from '../models/EditInvoice';
import type { Invoice } from '../models/Invoice';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoicesService {
    /**
     * @param id The invoice ID
     * @returns Invoice The invoice with the specified id
     * @throws ApiError
     */
    public static invoicesApiControllerGet(
        id: string,
    ): CancelablePromise<Invoice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/invoices/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The invoice with the specified ID was not found.`,
            },
        });
    }
    /**
     * @param id The invoice ID
     * @returns boolean The invoice has been deleted
     * @throws ApiError
     */
    public static invoicesApiControllerDelete(
        id: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/invoices/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `The invoice doesnt not exist`,
            },
        });
    }
    /**
     * @param invoiceNumber The invoice number
     * @returns Invoice The invoice with the specified invoice number
     * @throws ApiError
     */
    public static invoicesApiControllerGetByInvoiceNumber(
        invoiceNumber: string,
    ): CancelablePromise<Array<Invoice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/invoices/invoice-number/{invoiceNumber}',
            path: {
                'invoiceNumber': invoiceNumber,
            },
            errors: {
                404: `The invoice with the specified invoice number was not found.`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean The invoice has been added
     * @throws ApiError
     */
    public static invoicesApiControllerAdd(
        requestBody: Invoice,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/invoices',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `An error occured while adding the invoice`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean The invoice has been deleted
     * @throws ApiError
     */
    public static invoicesApiControllerEdit(
        requestBody: EditInvoice,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/invoices',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The invoice doesnt not exist`,
                404: `The invoice with the specified ID was not found.`,
            },
        });
    }
}
