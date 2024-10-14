// https://leetcode.cn/problems/undefined-to-null

/*
将 undefined 转化为 null 
给定一个深层嵌套的对象或数组 obj ，并创建该对象 obj 的副本，将其中的任何 undefined 值替换为 null 。

当使用 JSON.stringify() 将对象转换为 JSON 字符串时，undefined 值与 null 值的处理方式不同。该函数有助于确保序列化数据不会出现意外错误。

示例 1：
输入：obj = {"a": undefined, "b": 3}
输出：{"a": null, "b": 3}
解释：obj.a 的值已从 undefined 更改为 null 。

示例 2：
输入：obj = {"a": undefined, "b": ["a", undefined]}
输出：{"a": null,"b": ["a", null]}
解释：obj.a 和 obj.b[1] 的值已从 undefined 更改为 null 。
 
提示：
obj 是一个有效的 JSON 对象或数组
2 <= JSON.stringify(obj).length <= 105
*/

// 调试命令: ts-node ./src/obj/undefinedToNull.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Value = undefined | null | boolean | number | string | Value[] | { [key: string]: Value };

type Obj1 = Record<string, Value> | Array<Value>;
type Obj2 = Record<string, JSONValue> | Array<JSONValue>;

function undefinedToNull(obj: Obj1): Obj2 {
  return deepClone(obj, null) as Obj2;
}

function deepClone(obj: any, cvtUndefined?: any) {
  let res: Record<any, any>;
  // 获取对象类型名（无法准确识别NaN，NaN会是number）
  const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  switch (type) {
    // 递归型
    case 'object': {
      res = {};
      Object.keys(obj).forEach((k, i) => {
        res[k] = deepClone(obj[k], cvtUndefined);
      });
      // Object.keys处理array也够用了，length属性属于不可枚举(enumerable=false)
      break;
    }
    case 'array': {
      res = (obj as Array<any>).map(v => deepClone(v, cvtUndefined));
      break;
    }
    default: {
      const needCvt = cvtUndefined !== undefined;
      res = needCvt && obj === undefined ? cvtUndefined : obj;
      break;
    }
  }
  return res;
}

/**
 * undefinedToNull({"a": undefined, "b": 3}) // {"a": null, "b": 3}
 * undefinedToNull([undefined, undefined]) // [null, null]
 */
