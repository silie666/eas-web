/**
 * 创建一个必填字段的验证规则
 * @param message 显示的错误信息
 * @param trigger
 * @returns 返回一个表单验证规则
 */
export const createRequiredRule = (message: string, trigger = "blur") => {
  return [{ required: true, message: `${message}不能为空`, trigger }];
};
