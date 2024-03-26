export type Option<U, V> = {
  code: U;
  name: V;
  disabled?: boolean;
};

export function formatSelectOptions<T, U extends keyof T, V extends keyof T>(
  arr: T[],
  codeKey: U,
  nameKey?: V
): (Option<T[U], T[V]> & T)[] {
  return arr.map(item => {
    // 使用类型断言来明确指定 formattedItem 的类型
    const formattedItem: Option<T[U], T[V]> & T = {
      ...item,
      code: item[codeKey],
      name: nameKey ? item[nameKey] : item["name"], // 使用默认值 "name"
      disabled: false
    };
    return formattedItem;
  });
}

// 格式化文本 S
export const getSelectLabel = (value: any, list: any[], valueProp = "code", labelField = "name") => {
  const item = list.find(item => item[valueProp] === value);
  return item ? item[labelField] : null;
};

export const getSelectMultipleLabel = (value: any[], list: any[], valueProp = "code", labelField = "name") => {
  return value
    .map(val => {
      const item = list.find(item => item[valueProp] === val);
      return item ? item[labelField] : null;
    })
    .join(", ");
};
// 格式化文本 E
