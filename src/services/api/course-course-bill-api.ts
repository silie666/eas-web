/* tslint:disable */
/* eslint-disable */
/**
 * 学校
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CourseCourseBill1 } from '../model';
// @ts-ignore
import { PatchTeacherApiCourseBillRequest } from '../model';
/**
 * CourseCourseBillApi - axios parameter creator
 * @export
 */
export const CourseCourseBillApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 账单-账单管理-账单删除
         * @param {number} courseBillId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeacherApiCourseBill: async (courseBillId: number, authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'courseBillId' is not null or undefined
            assertParamExists('deleteTeacherApiCourseBill', 'courseBillId', courseBillId)
            const localVarPath = `/teacher-api/course-bills/{courseBillId}`
                .replace(`{${"courseBillId"}}`, encodeURIComponent(String(courseBillId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 账单-账单管理-账单详情
         * @param {number} courseBillId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeacherApiCourseBill: async (courseBillId: number, authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'courseBillId' is not null or undefined
            assertParamExists('getTeacherApiCourseBill', 'courseBillId', courseBillId)
            const localVarPath = `/teacher-api/course-bills/{courseBillId}`
                .replace(`{${"courseBillId"}}`, encodeURIComponent(String(courseBillId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 账单-账单管理-账单列表
         * @param {number} [page] 页数，默认1
         * @param {number} [perPage] 每页条数，默认15，最大200
         * @param {string} [status] 状态
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeacherApiCourseBills: async (page?: number, perPage?: number, status?: string, authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/teacher-api/course-bills`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 账单-账单管理-账单更新
         * @param {string} courseBillId 
         * @param {string} [authorization] 授权
         * @param {PatchTeacherApiCourseBillRequest} [patchTeacherApiCourseBillRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTeacherApiCourseBill: async (courseBillId: string, authorization?: string, patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'courseBillId' is not null or undefined
            assertParamExists('patchTeacherApiCourseBill', 'courseBillId', courseBillId)
            const localVarPath = `/teacher-api/course-bills/{courseBillId}`
                .replace(`{${"courseBillId"}}`, encodeURIComponent(String(courseBillId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchTeacherApiCourseBillRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 账单-账单管理-发送账单
         * @param {string} courseBillId 
         * @param {string} [authorization] 授权
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTeacherApiCourseBillSend: async (courseBillId: string, authorization?: string, body?: object, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'courseBillId' is not null or undefined
            assertParamExists('patchTeacherApiCourseBillSend', 'courseBillId', courseBillId)
            const localVarPath = `/teacher-api/course-bills/{courseBillId}/send`
                .replace(`{${"courseBillId"}}`, encodeURIComponent(String(courseBillId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 账单-账单管理-账单添加
         * @param {string} [authorization] 授权
         * @param {PatchTeacherApiCourseBillRequest} [patchTeacherApiCourseBillRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTeacherApiCourseBills: async (authorization?: string, patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/teacher-api/course-bills`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchTeacherApiCourseBillRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CourseCourseBillApi - functional programming interface
 * @export
 */
export const CourseCourseBillApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CourseCourseBillApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 账单-账单管理-账单删除
         * @param {number} courseBillId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTeacherApiCourseBill(courseBillId: number, authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTeacherApiCourseBill(courseBillId, authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.deleteTeacherApiCourseBill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 账单-账单管理-账单详情
         * @param {number} courseBillId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeacherApiCourseBill(courseBillId: number, authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CourseCourseBill1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeacherApiCourseBill(courseBillId, authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.getTeacherApiCourseBill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 账单-账单管理-账单列表
         * @param {number} [page] 页数，默认1
         * @param {number} [perPage] 每页条数，默认15，最大200
         * @param {string} [status] 状态
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeacherApiCourseBills(page?: number, perPage?: number, status?: string, authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CourseCourseBill1>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTeacherApiCourseBills(page, perPage, status, authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.getTeacherApiCourseBills']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 账单-账单管理-账单更新
         * @param {string} courseBillId 
         * @param {string} [authorization] 授权
         * @param {PatchTeacherApiCourseBillRequest} [patchTeacherApiCourseBillRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchTeacherApiCourseBill(courseBillId: string, authorization?: string, patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CourseCourseBill1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchTeacherApiCourseBill(courseBillId, authorization, patchTeacherApiCourseBillRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.patchTeacherApiCourseBill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 账单-账单管理-发送账单
         * @param {string} courseBillId 
         * @param {string} [authorization] 授权
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchTeacherApiCourseBillSend(courseBillId: string, authorization?: string, body?: object, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchTeacherApiCourseBillSend(courseBillId, authorization, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.patchTeacherApiCourseBillSend']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 账单-账单管理-账单添加
         * @param {string} [authorization] 授权
         * @param {PatchTeacherApiCourseBillRequest} [patchTeacherApiCourseBillRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTeacherApiCourseBills(authorization?: string, patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CourseCourseBill1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTeacherApiCourseBills(authorization, patchTeacherApiCourseBillRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CourseCourseBillApi.postTeacherApiCourseBills']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CourseCourseBillApi - factory interface
 * @export
 */
export const CourseCourseBillApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CourseCourseBillApiFp(configuration)
    return {
        /**
         * 
         * @summary 账单-账单管理-账单删除
         * @param {CourseCourseBillApiDeleteTeacherApiCourseBillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTeacherApiCourseBill(requestParameters: CourseCourseBillApiDeleteTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.deleteTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 账单-账单管理-账单详情
         * @param {CourseCourseBillApiGetTeacherApiCourseBillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeacherApiCourseBill(requestParameters: CourseCourseBillApiGetTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig): AxiosPromise<CourseCourseBill1> {
            return localVarFp.getTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 账单-账单管理-账单列表
         * @param {CourseCourseBillApiGetTeacherApiCourseBillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeacherApiCourseBills(requestParameters: CourseCourseBillApiGetTeacherApiCourseBillsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<CourseCourseBill1>> {
            return localVarFp.getTeacherApiCourseBills(requestParameters.page, requestParameters.perPage, requestParameters.status, requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 账单-账单管理-账单更新
         * @param {CourseCourseBillApiPatchTeacherApiCourseBillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTeacherApiCourseBill(requestParameters: CourseCourseBillApiPatchTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig): AxiosPromise<CourseCourseBill1> {
            return localVarFp.patchTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, requestParameters.patchTeacherApiCourseBillRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 账单-账单管理-发送账单
         * @param {CourseCourseBillApiPatchTeacherApiCourseBillSendRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchTeacherApiCourseBillSend(requestParameters: CourseCourseBillApiPatchTeacherApiCourseBillSendRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.patchTeacherApiCourseBillSend(requestParameters.courseBillId, requestParameters.authorization, requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 账单-账单管理-账单添加
         * @param {CourseCourseBillApiPostTeacherApiCourseBillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTeacherApiCourseBills(requestParameters: CourseCourseBillApiPostTeacherApiCourseBillsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CourseCourseBill1> {
            return localVarFp.postTeacherApiCourseBills(requestParameters.authorization, requestParameters.patchTeacherApiCourseBillRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteTeacherApiCourseBill operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiDeleteTeacherApiCourseBillRequest
 */
export interface CourseCourseBillApiDeleteTeacherApiCourseBillRequest {
    /**
     * 
     * @type {number}
     * @memberof CourseCourseBillApiDeleteTeacherApiCourseBill
     */
    readonly courseBillId: number

    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiDeleteTeacherApiCourseBill
     */
    readonly authorization?: string
}

/**
 * Request parameters for getTeacherApiCourseBill operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiGetTeacherApiCourseBillRequest
 */
export interface CourseCourseBillApiGetTeacherApiCourseBillRequest {
    /**
     * 
     * @type {number}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBill
     */
    readonly courseBillId: number

    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBill
     */
    readonly authorization?: string
}

/**
 * Request parameters for getTeacherApiCourseBills operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiGetTeacherApiCourseBillsRequest
 */
export interface CourseCourseBillApiGetTeacherApiCourseBillsRequest {
    /**
     * 页数，默认1
     * @type {number}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBills
     */
    readonly page?: number

    /**
     * 每页条数，默认15，最大200
     * @type {number}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBills
     */
    readonly perPage?: number

    /**
     * 状态
     * @type {string}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBills
     */
    readonly status?: string

    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiGetTeacherApiCourseBills
     */
    readonly authorization?: string
}

/**
 * Request parameters for patchTeacherApiCourseBill operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiPatchTeacherApiCourseBillRequest
 */
export interface CourseCourseBillApiPatchTeacherApiCourseBillRequest {
    /**
     * 
     * @type {string}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBill
     */
    readonly courseBillId: string

    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBill
     */
    readonly authorization?: string

    /**
     * 
     * @type {PatchTeacherApiCourseBillRequest}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBill
     */
    readonly patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest
}

/**
 * Request parameters for patchTeacherApiCourseBillSend operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiPatchTeacherApiCourseBillSendRequest
 */
export interface CourseCourseBillApiPatchTeacherApiCourseBillSendRequest {
    /**
     * 
     * @type {string}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBillSend
     */
    readonly courseBillId: string

    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBillSend
     */
    readonly authorization?: string

    /**
     * 
     * @type {object}
     * @memberof CourseCourseBillApiPatchTeacherApiCourseBillSend
     */
    readonly body?: object
}

/**
 * Request parameters for postTeacherApiCourseBills operation in CourseCourseBillApi.
 * @export
 * @interface CourseCourseBillApiPostTeacherApiCourseBillsRequest
 */
export interface CourseCourseBillApiPostTeacherApiCourseBillsRequest {
    /**
     * 授权
     * @type {string}
     * @memberof CourseCourseBillApiPostTeacherApiCourseBills
     */
    readonly authorization?: string

    /**
     * 
     * @type {PatchTeacherApiCourseBillRequest}
     * @memberof CourseCourseBillApiPostTeacherApiCourseBills
     */
    readonly patchTeacherApiCourseBillRequest?: PatchTeacherApiCourseBillRequest
}

/**
 * CourseCourseBillApi - object-oriented interface
 * @export
 * @class CourseCourseBillApi
 * @extends {BaseAPI}
 */
export class CourseCourseBillApi extends BaseAPI {
    /**
     * 
     * @summary 账单-账单管理-账单删除
     * @param {CourseCourseBillApiDeleteTeacherApiCourseBillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public deleteTeacherApiCourseBill(requestParameters: CourseCourseBillApiDeleteTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).deleteTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 账单-账单管理-账单详情
     * @param {CourseCourseBillApiGetTeacherApiCourseBillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public getTeacherApiCourseBill(requestParameters: CourseCourseBillApiGetTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).getTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 账单-账单管理-账单列表
     * @param {CourseCourseBillApiGetTeacherApiCourseBillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public getTeacherApiCourseBills(requestParameters: CourseCourseBillApiGetTeacherApiCourseBillsRequest = {}, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).getTeacherApiCourseBills(requestParameters.page, requestParameters.perPage, requestParameters.status, requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 账单-账单管理-账单更新
     * @param {CourseCourseBillApiPatchTeacherApiCourseBillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public patchTeacherApiCourseBill(requestParameters: CourseCourseBillApiPatchTeacherApiCourseBillRequest, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).patchTeacherApiCourseBill(requestParameters.courseBillId, requestParameters.authorization, requestParameters.patchTeacherApiCourseBillRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 账单-账单管理-发送账单
     * @param {CourseCourseBillApiPatchTeacherApiCourseBillSendRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public patchTeacherApiCourseBillSend(requestParameters: CourseCourseBillApiPatchTeacherApiCourseBillSendRequest, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).patchTeacherApiCourseBillSend(requestParameters.courseBillId, requestParameters.authorization, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 账单-账单管理-账单添加
     * @param {CourseCourseBillApiPostTeacherApiCourseBillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseCourseBillApi
     */
    public postTeacherApiCourseBills(requestParameters: CourseCourseBillApiPostTeacherApiCourseBillsRequest = {}, options?: RawAxiosRequestConfig) {
        return CourseCourseBillApiFp(this.configuration).postTeacherApiCourseBills(requestParameters.authorization, requestParameters.patchTeacherApiCourseBillRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

