import { http } from "@/utils/http";
import { AuthAuthApi, UserMeApi } from "@/services";

/**
 * user.user-token
 */
export type UserResult = {
  /**
   * token有效期
   */
  expire_time?: Date;
  /**
   * 通讯token
   */
  // token?: string;
  access_token?: string;
  user?: UserUser;
  /**
   * 用户UUID
   */
  user_uuid?: string;
};

/**
 * user.user
 */
export type UserUser = {
  /**
   * 用户手机号码
   */
  cellphone_number?: string;
  /**
   * 创建时间
   */
  create_time?: Date | null;
  /**
   * 用户姓名
   */
  name?: string;
  /**
   * 用戶UUID
   */
  user_uuid?: string;
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/common-api/login", { data });
};

export const delLogin = () => {
  return new AuthAuthApi().deleteCommonApiLogin();
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
/**
 * user.user-node
 */
export type NodeResult = {
  /**
   * 节点标志
   */
  sign?: string;
  /**
   * 地址
   */
  uri?: string;
};
export const getNode = () => {
  return new UserMeApi().getCommonApiNodes({});
};
