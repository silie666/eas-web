import _ from "lodash-es";
// 打平数据和计算rowSpan
export function flattenData(data, paths) {
  const flatData = [];

  const processLevel = (levelData, pathParts, index, currentRecord, prefix) => {
    if (index === pathParts.length) {
      flatData.push(currentRecord);
      return;
    }

    const part = pathParts[index];
    const nextPart = pathParts[index + 1];
    const nextLevelData = levelData[part];

    if (!nextLevelData || nextLevelData.length === 0) {
      flatData.push(currentRecord);
      return;
    }

    nextLevelData.forEach(subItem => {
      const newPrefix = prefix ? `${prefix}_${part}` : part;
      const newRecord = { ...currentRecord };

      // 添加当前层级的属性
      Object.keys(subItem).forEach(key => {
        if (key !== nextPart) {
          const newKey = `${newPrefix}_${key}`;
          newRecord[newKey] = subItem[key];
        }
      });

      // 递归处理下一层级
      processLevel(subItem, pathParts, index + 1, newRecord, newPrefix);
    });
  };

  data.forEach(item => {
    paths.forEach(path => {
      const pathParts = path.split(".");
      const initialRecord = {};

      // 包括顶层的非数组属性
      Object.keys(item).forEach(key => {
        if (!Array.isArray(item[key])) {
          initialRecord[key] = item[key];
        }
      });
      processLevel(item, pathParts, 0, initialRecord, "");
    });
  });

  return flatData;
}

export function calculateRowspan(data, keys) {
  const rowsToAdd = data.map(row => ({ ...row, ...Object.fromEntries(keys.map(key => [`${key}_rowspan`, 1])) })); // 复制原始数据并初始化_rowspan值
  const lastValue = {}; // 记录每个键的最后一个值
  const lastIndex = {}; // 记录每个键的最后一个值的索引

  keys.forEach(key => {
    lastValue[key] = null;
    lastIndex[key] = -1;
  });

  for (let i = 0; i < rowsToAdd.length; i++) {
    const row = rowsToAdd[i];
    keys.forEach(key => {
      if (row[key] !== undefined && row[key] === lastValue[key] && lastIndex[key] !== -1) {
        // 如果当前行的值与前一行相同，且两行中都存在该键，增加前一行的_rowspan
        rowsToAdd[lastIndex[key]][`${key}_rowspan`] += 1;
        // 将当前行的_rowspan设置为0，表示它应该被合并
        row[`${key}_rowspan`] = 0;
      } else {
        // 更新最后一个值和索引
        lastValue[key] = row[key];
        lastIndex[key] = i;
      }
    });
  }
  return rowsToAdd;
}

// 打平对象
export function flattenObject(obj: any, prefix = "") {
  return _.transform(
    obj,
    function (result, value, key) {
      const newKey = prefix ? `${prefix}_${key as string}` : key;
      if (_.isObject(value) && !_.isArray(value)) {
        _.assign(result, flattenObject(value, newKey as string));
      } else {
        result[newKey] = value;
      }
    },
    {}
  );
}
