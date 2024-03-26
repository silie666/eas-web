/**
 *  用于转换列表的分页和后端的字段相同的方法
 */
import { isAllEmpty } from "@pureadmin/utils";
import { http } from "@/utils/http";
import { RequestMethods } from "@/utils/http/types";

// 请求参数映射对象
const requestMapping = {
  currentPage: "page",
  pageSize: "per_page"
};

export function convertRequestParams(requestParams) {
  const params = {};

  // 遍历请求参数映射对象，将映射的字段添加到params中
  for (const frontEndField in requestMapping) {
    const backEndField = requestMapping[frontEndField];
    if (Object.prototype.hasOwnProperty.call(requestParams, frontEndField)) {
      params[backEndField] = requestParams[frontEndField];
    }
  }

  // 处理其他额外字段，将它们合并到params中
  for (const key in requestParams) {
    if (!Object.prototype.hasOwnProperty.call(requestMapping, key)) {
      if (!isAllEmpty(requestParams[key])) {
        params[key] = requestParams[key];
      }
    }
  }
  return params;
}

function replaceUrlParams(url: string, params: Record<string, string>): string {
  return url.replace(/\{(\w+)\}/g, (match, key) => {
    return key in params ? params[key] : match;
  });
}
export interface ApiOptions {
  urlParams?: Record<string, string>;
  data?: any;
  params?: Record<string, string | number>;
}
export function createApiFunction<T>(endpoint: string, options: ApiOptions = {}) {
  // 解构选项
  const { urlParams, data, params } = options;

  // 解析枚举值以获取方法和URL
  const [method, path] = endpoint.split(" ");

  // 使用映射来确定方法
  const methodMapping: { [key: string]: RequestMethods } = {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    DELETE: "delete"
  };

  const httpMethod = methodMapping[method];

  // 如果urlParams被提供且不为空，则替换URL中的参数
  const url = urlParams && Object.keys(urlParams).length > 0 ? replaceUrlParams(path, urlParams) : path;
  return http.request<T>(httpMethod, url, { data, params });
}
