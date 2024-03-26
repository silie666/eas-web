import Axios, { AxiosInstance, AxiosRequestConfig, CustomParamsSerializer } from "axios";
import {
  PureHttpError,
  RequestMethods,
  PureHttpResponse,
  PureHttpRequestConfig,
  CustomAxiosRequestConfig
} from "./types.d";
import { stringify } from "qs";
import NProgress from "../progress";
import { getToken, formatToken, TokenKey } from "@/utils/auth";
import { useUserStoreHook } from "@/store/modules/user";
import { message } from "@/utils/message";

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_MOCK === "true"
        ? import.meta.env.VITE_MOCK_URL
        : import.meta.env.VITE_BACK_END_DEV_URL
      : import.meta.env.VITE_BASE_URL,
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer
  }
};

class PureHttp {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  /** token过期后，暂存待执行的请求 */
  private static requests = [];

  /** 防止重复刷新token */
  private static isRefreshing = false;

  /** 初始化配置对象 */
  private static initConfig: PureHttpRequestConfig = {};

  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  /** 重连原始请求 */
  private static retryOriginalRequest(config: PureHttpRequestConfig) {
    return new Promise(resolve => {
      PureHttp.requests.push((token: string) => {
        config.headers[TokenKey] = formatToken(token);
        resolve(config);
      });
    });
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<PureHttpResponse<T>> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as PureHttpRequestConfig;

    // 单独处理自定义请求/响应回调
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: undefined) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /** 单独抽离的post工具函数 */
  public post<T>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<PureHttpResponse<T>> {
    return this.request<T>("post", url, params, config);
  }

  /** 单独抽离的get工具函数 */
  public get<T>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<PureHttpResponse<T>> {
    return this.request<T>("get", url, params, config);
  }

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    PureHttp.axiosInstance.interceptors.request.use(
      async (config: PureHttpRequestConfig): Promise<any> => {
        if (!config.silentMode) {
          // 开启进度条动画
          NProgress.start();
        }

        // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback(config);
          return config;
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback(config);
          return config;
        }
        /** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
        const whiteList = ["/refreshToken", "/login"];
        return whiteList.some(v => config.url.indexOf(v) > -1)
          ? config
          : new Promise(resolve => {
              const data = getToken();
              if (data) {
                const now = new Date().getTime();
                const expired = parseInt(data.expires) - now <= 0;
                if (expired) {
                  if (!PureHttp.isRefreshing) {
                    PureHttp.isRefreshing = true;
                    // token过期刷新
                    useUserStoreHook()
                      .handRefreshToken({ refreshToken: data.refreshToken })
                      .then(res => {
                        const token = res.data.accessToken;
                        config.headers[TokenKey] = formatToken(token);
                        PureHttp.requests.forEach(cb => cb(token));
                        PureHttp.requests = [];
                      })
                      .finally(() => {
                        PureHttp.isRefreshing = false;
                      });
                  }
                  resolve(PureHttp.retryOriginalRequest(config));
                } else {
                  config.headers[TokenKey] = formatToken(data.accessToken);
                  resolve(config);
                }
              } else {
                resolve(config);
              }
            });
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  private hasKey(key: string): boolean {
    const backEndKeys = ["S-Page-TotalCount", "S-Page-CurrentPage", "S-Page-PerPage"];

    for (const backEndKey of backEndKeys) {
      if (key === backEndKey || backEndKey.toLowerCase() === key) {
        return true;
      }
    }
    return false;
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    const instance = PureHttp.axiosInstance;
    instance.interceptors.response.use(
      (response: any) => {
        const existKey = Object.keys(response.headers).some(key => this.hasKey(key));
        if (existKey) {
          response.paginator = {
            total: parseInt(response.headers["t-page-totalcount"])
            // pageSize: parseInt(response.headers["t-page-perpage"]),
            // currentPage: parseInt(response.headers["t-page-currentpage"])
          };
        } else {
          // apifox的mock数据单独写
          if (response.request.responseURL.indexOf(import.meta.env.VITE_MOCK) > -1) {
            response.paginator = {
              total: 100
              // pageSize: 20,
              // currentPage: 1
            };
          }
        }
        const $config = response.config;
        // 关闭进度条动画
        NProgress.done();
        // 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response);
          return response;
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response);
          return response;
        }
        return response;
      },
      (error: PureHttpError) => {
        const config = error.config as CustomAxiosRequestConfig;
        if (config.silentMode) {
          // 静默模式: 只记录错误，不执行其他操作
          console.error(error);
          // 返回一个特定的错误对象或null
          return Promise.reject(error);
        } else {
          // 非静默模式: 执行现有的错误处理逻辑
          console.log(error);
          message((error.response.data as { message?: string })?.message, {
            type: "error"
          });
          if (error.response.status === 401) {
            useUserStoreHook().logOut();
          }
          const $error = error;
          $error.isCancelRequest = Axios.isCancel($error);
          // 关闭进度条动画
          NProgress.done();
          // 所有的响应异常 区分来源为取消请求/非取消请求
          return Promise.reject($error);
        }
      }
    );
  }

  // 添加一个公共方法来获取axios实例
  public getAxiosInstance(): AxiosInstance {
    return PureHttp.axiosInstance;
  }
}

// 列表

export const http = new PureHttp();
