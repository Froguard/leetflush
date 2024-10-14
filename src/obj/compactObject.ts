// https://leetcode.cn/problems/compact-object/

/*
精简对象

现给定一个对象或数组 obj，返回一个 精简对象 。

精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。

你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。

示例 1：
输入：obj = [null, 0, false, 1]
输出：[1]
解释：数组中的所有假值已被移除。

示例 2：
输入：obj = {"a": null, "b": [false, 1]}
输出：{"b": [1]}
解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。

示例 3：
输入：obj = [null, 0, 5, [0], [false, 16]]
输出：[5, [], [16]]
解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。
 

提示：
obj 是一个有效的 JSON 对象
2 <= JSON.stringify(obj).length <= 106  
*/

// 调试命令: ts-node ./src/obj/compactObject.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  return deepClone(obj) as Obj;
}

function deepClone(obj: any) {
  let res: Record<any, any>;
  // 获取对象类型名（无法准确识别NaN，NaN会是number）
  const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  switch (type) {
    // 递归型
    case 'object': {
      res = {};
      Object.keys(obj).forEach((k, i) => {
        const v = deepClone(obj[k]);
        if (v) {
          res[k] = v;
        }
      });
      // Object.keys处理array也够用了，length属性属于不可枚举(enumerable=false)
      break;
    }
    case 'array': {
      res = (obj as Array<any>).map(v => deepClone(v)).filter(Boolean);
      break;
    }
    default: {
      res = obj;
      break;
    }
  }
  return res;
}

console.log(compactObject([]));
console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
console.log(compactObject([null, 0, 5, '']));
