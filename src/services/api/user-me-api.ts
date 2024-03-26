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
import { PatchCommonApiMeRequest } from '../model';
// @ts-ignore
import { PostStudentApiMeCardsRequest } from '../model';
// @ts-ignore
import { UserUser } from '../model';
// @ts-ignore
import { UserUserCard } from '../model';
// @ts-ignore
import { UserUserNode } from '../model';
/**
 * UserMeApi - axios parameter creator
 * @export
 */
export const UserMeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 删除信用卡
         * @param {number} cardId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteStudentApiMeCard: async (cardId: number, authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardId' is not null or undefined
            assertParamExists('deleteStudentApiMeCard', 'cardId', cardId)
            const localVarPath = `/student-api/me-cards/{cardId}`
                .replace(`{${"cardId"}}`, encodeURIComponent(String(cardId)));
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
         * @summary 我的资料
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommonApiMe: async (authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/common-api/me`;
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
         * @summary 我的节点列表
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommonApiNodes: async (authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/common-api/nodes`;
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
         * @summary 信用卡列表
         * @param {number} [page] 页数，默认1
         * @param {number} [perPage] 每页条数，默认15，最大200
         * @param {string} [number] 卡号
         * @param {string} [withAll] 获取所有数据
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudentApiMeCards: async (page?: number, perPage?: number, number?: string, withAll?: string, authorization?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/student-api/me-cards`;
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

            if (number !== undefined) {
                localVarQueryParameter['number'] = number;
            }

            if (withAll !== undefined) {
                localVarQueryParameter['with_all'] = withAll;
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
         * @summary 更新我的资料
         * @param {string} [authorization] 授权
         * @param {PatchCommonApiMeRequest} [patchCommonApiMeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCommonApiMe: async (authorization?: string, patchCommonApiMeRequest?: PatchCommonApiMeRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/common-api/me`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchCommonApiMeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新信用卡
         * @param {string} cardId 
         * @param {string} [authorization] 授权
         * @param {PostStudentApiMeCardsRequest} [postStudentApiMeCardsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchStudentApiMeCard: async (cardId: string, authorization?: string, postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardId' is not null or undefined
            assertParamExists('patchStudentApiMeCard', 'cardId', cardId)
            const localVarPath = `/student-api/me-cards/{cardId}`
                .replace(`{${"cardId"}}`, encodeURIComponent(String(cardId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(postStudentApiMeCardsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 创建信用卡
         * @param {string} [authorization] 授权
         * @param {PostStudentApiMeCardsRequest} [postStudentApiMeCardsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postStudentApiMeCards: async (authorization?: string, postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/student-api/me-cards`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postStudentApiMeCardsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserMeApi - functional programming interface
 * @export
 */
export const UserMeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserMeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 删除信用卡
         * @param {number} cardId 
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteStudentApiMeCard(cardId: number, authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteStudentApiMeCard(cardId, authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.deleteStudentApiMeCard']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 我的资料
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommonApiMe(authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCommonApiMe(authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.getCommonApiMe']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 我的节点列表
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommonApiNodes(authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserUserNode>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCommonApiNodes(authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.getCommonApiNodes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 信用卡列表
         * @param {number} [page] 页数，默认1
         * @param {number} [perPage] 每页条数，默认15，最大200
         * @param {string} [number] 卡号
         * @param {string} [withAll] 获取所有数据
         * @param {string} [authorization] 授权
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudentApiMeCards(page?: number, perPage?: number, number?: string, withAll?: string, authorization?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserUserCard>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStudentApiMeCards(page, perPage, number, withAll, authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.getStudentApiMeCards']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 更新我的资料
         * @param {string} [authorization] 授权
         * @param {PatchCommonApiMeRequest} [patchCommonApiMeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCommonApiMe(authorization?: string, patchCommonApiMeRequest?: PatchCommonApiMeRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCommonApiMe(authorization, patchCommonApiMeRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.patchCommonApiMe']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 更新信用卡
         * @param {string} cardId 
         * @param {string} [authorization] 授权
         * @param {PostStudentApiMeCardsRequest} [postStudentApiMeCardsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchStudentApiMeCard(cardId: string, authorization?: string, postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchStudentApiMeCard(cardId, authorization, postStudentApiMeCardsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.patchStudentApiMeCard']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary 创建信用卡
         * @param {string} [authorization] 授权
         * @param {PostStudentApiMeCardsRequest} [postStudentApiMeCardsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postStudentApiMeCards(authorization?: string, postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postStudentApiMeCards(authorization, postStudentApiMeCardsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserMeApi.postStudentApiMeCards']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserMeApi - factory interface
 * @export
 */
export const UserMeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserMeApiFp(configuration)
    return {
        /**
         * 
         * @summary 删除信用卡
         * @param {UserMeApiDeleteStudentApiMeCardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteStudentApiMeCard(requestParameters: UserMeApiDeleteStudentApiMeCardRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.deleteStudentApiMeCard(requestParameters.cardId, requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 我的资料
         * @param {UserMeApiGetCommonApiMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommonApiMe(requestParameters: UserMeApiGetCommonApiMeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UserUser> {
            return localVarFp.getCommonApiMe(requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 我的节点列表
         * @param {UserMeApiGetCommonApiNodesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommonApiNodes(requestParameters: UserMeApiGetCommonApiNodesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<UserUserNode>> {
            return localVarFp.getCommonApiNodes(requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 信用卡列表
         * @param {UserMeApiGetStudentApiMeCardsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudentApiMeCards(requestParameters: UserMeApiGetStudentApiMeCardsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<UserUserCard>> {
            return localVarFp.getStudentApiMeCards(requestParameters.page, requestParameters.perPage, requestParameters.number, requestParameters.withAll, requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新我的资料
         * @param {UserMeApiPatchCommonApiMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCommonApiMe(requestParameters: UserMeApiPatchCommonApiMeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UserUser> {
            return localVarFp.patchCommonApiMe(requestParameters.authorization, requestParameters.patchCommonApiMeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新信用卡
         * @param {UserMeApiPatchStudentApiMeCardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchStudentApiMeCard(requestParameters: UserMeApiPatchStudentApiMeCardRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.patchStudentApiMeCard(requestParameters.cardId, requestParameters.authorization, requestParameters.postStudentApiMeCardsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 创建信用卡
         * @param {UserMeApiPostStudentApiMeCardsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postStudentApiMeCards(requestParameters: UserMeApiPostStudentApiMeCardsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.postStudentApiMeCards(requestParameters.authorization, requestParameters.postStudentApiMeCardsRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteStudentApiMeCard operation in UserMeApi.
 * @export
 * @interface UserMeApiDeleteStudentApiMeCardRequest
 */
export interface UserMeApiDeleteStudentApiMeCardRequest {
    /**
     * 
     * @type {number}
     * @memberof UserMeApiDeleteStudentApiMeCard
     */
    readonly cardId: number

    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiDeleteStudentApiMeCard
     */
    readonly authorization?: string
}

/**
 * Request parameters for getCommonApiMe operation in UserMeApi.
 * @export
 * @interface UserMeApiGetCommonApiMeRequest
 */
export interface UserMeApiGetCommonApiMeRequest {
    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiGetCommonApiMe
     */
    readonly authorization?: string
}

/**
 * Request parameters for getCommonApiNodes operation in UserMeApi.
 * @export
 * @interface UserMeApiGetCommonApiNodesRequest
 */
export interface UserMeApiGetCommonApiNodesRequest {
    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiGetCommonApiNodes
     */
    readonly authorization?: string
}

/**
 * Request parameters for getStudentApiMeCards operation in UserMeApi.
 * @export
 * @interface UserMeApiGetStudentApiMeCardsRequest
 */
export interface UserMeApiGetStudentApiMeCardsRequest {
    /**
     * 页数，默认1
     * @type {number}
     * @memberof UserMeApiGetStudentApiMeCards
     */
    readonly page?: number

    /**
     * 每页条数，默认15，最大200
     * @type {number}
     * @memberof UserMeApiGetStudentApiMeCards
     */
    readonly perPage?: number

    /**
     * 卡号
     * @type {string}
     * @memberof UserMeApiGetStudentApiMeCards
     */
    readonly number?: string

    /**
     * 获取所有数据
     * @type {string}
     * @memberof UserMeApiGetStudentApiMeCards
     */
    readonly withAll?: string

    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiGetStudentApiMeCards
     */
    readonly authorization?: string
}

/**
 * Request parameters for patchCommonApiMe operation in UserMeApi.
 * @export
 * @interface UserMeApiPatchCommonApiMeRequest
 */
export interface UserMeApiPatchCommonApiMeRequest {
    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiPatchCommonApiMe
     */
    readonly authorization?: string

    /**
     * 
     * @type {PatchCommonApiMeRequest}
     * @memberof UserMeApiPatchCommonApiMe
     */
    readonly patchCommonApiMeRequest?: PatchCommonApiMeRequest
}

/**
 * Request parameters for patchStudentApiMeCard operation in UserMeApi.
 * @export
 * @interface UserMeApiPatchStudentApiMeCardRequest
 */
export interface UserMeApiPatchStudentApiMeCardRequest {
    /**
     * 
     * @type {string}
     * @memberof UserMeApiPatchStudentApiMeCard
     */
    readonly cardId: string

    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiPatchStudentApiMeCard
     */
    readonly authorization?: string

    /**
     * 
     * @type {PostStudentApiMeCardsRequest}
     * @memberof UserMeApiPatchStudentApiMeCard
     */
    readonly postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest
}

/**
 * Request parameters for postStudentApiMeCards operation in UserMeApi.
 * @export
 * @interface UserMeApiPostStudentApiMeCardsRequest
 */
export interface UserMeApiPostStudentApiMeCardsRequest {
    /**
     * 授权
     * @type {string}
     * @memberof UserMeApiPostStudentApiMeCards
     */
    readonly authorization?: string

    /**
     * 
     * @type {PostStudentApiMeCardsRequest}
     * @memberof UserMeApiPostStudentApiMeCards
     */
    readonly postStudentApiMeCardsRequest?: PostStudentApiMeCardsRequest
}

/**
 * UserMeApi - object-oriented interface
 * @export
 * @class UserMeApi
 * @extends {BaseAPI}
 */
export class UserMeApi extends BaseAPI {
    /**
     * 
     * @summary 删除信用卡
     * @param {UserMeApiDeleteStudentApiMeCardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public deleteStudentApiMeCard(requestParameters: UserMeApiDeleteStudentApiMeCardRequest, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).deleteStudentApiMeCard(requestParameters.cardId, requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 我的资料
     * @param {UserMeApiGetCommonApiMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public getCommonApiMe(requestParameters: UserMeApiGetCommonApiMeRequest = {}, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).getCommonApiMe(requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 我的节点列表
     * @param {UserMeApiGetCommonApiNodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public getCommonApiNodes(requestParameters: UserMeApiGetCommonApiNodesRequest = {}, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).getCommonApiNodes(requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 信用卡列表
     * @param {UserMeApiGetStudentApiMeCardsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public getStudentApiMeCards(requestParameters: UserMeApiGetStudentApiMeCardsRequest = {}, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).getStudentApiMeCards(requestParameters.page, requestParameters.perPage, requestParameters.number, requestParameters.withAll, requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 更新我的资料
     * @param {UserMeApiPatchCommonApiMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public patchCommonApiMe(requestParameters: UserMeApiPatchCommonApiMeRequest = {}, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).patchCommonApiMe(requestParameters.authorization, requestParameters.patchCommonApiMeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 更新信用卡
     * @param {UserMeApiPatchStudentApiMeCardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public patchStudentApiMeCard(requestParameters: UserMeApiPatchStudentApiMeCardRequest, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).patchStudentApiMeCard(requestParameters.cardId, requestParameters.authorization, requestParameters.postStudentApiMeCardsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 创建信用卡
     * @param {UserMeApiPostStudentApiMeCardsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserMeApi
     */
    public postStudentApiMeCards(requestParameters: UserMeApiPostStudentApiMeCardsRequest = {}, options?: RawAxiosRequestConfig) {
        return UserMeApiFp(this.configuration).postStudentApiMeCards(requestParameters.authorization, requestParameters.postStudentApiMeCardsRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
