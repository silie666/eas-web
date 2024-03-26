import { Auth } from "@/constants/back-api";

// 默认写好四个按钮 添加 修改 查看 删除 需要用就定义上
export interface ActionBtn<T> {
  add?: {
    auth: Auth;
    onClick?: () => void;
  };
  edit?: {
    auth: Auth;
    onClick?: (row: T) => void;
  };
  detail?: {
    auth: Auth;
    onClick?: (row: T) => void;
  };
  delete?: {
    auth: Auth;
    onConfirm?: (row: T) => void;
  };
}
