// https://leetcode.cn/problems/convert-object-to-json-string/description/

/*
现给定一个值，返回该值的有效 JSON 字符串。你可以假设这个值只包括字符串、整数、数组、对象、布尔值和 null。返回的字符串不能包含额外的空格。键的返回顺序应该与 Object.keys() 的顺序相同。

请你在不使用内置方法 JSON.stringify 的前提下解决这个问题。

示例 1：
输入：object = {"y":1,"x":2}
输出：{"y":1,"x":2}
解释：
返回该对象的 JSON 表示形式。
注意，键的返回顺序应该与 Object.keys() 的顺序相同。

示例 2：
输入：object = {"a":"str","b":-12,"c":true,"d":null}
输出：{"a":"str","b":-12,"c":true,"d":null}
解释：
JSON 的基本类型是字符串、数字型、布尔值和 null。

示例 3：
输入：object = {"key":{"a":1,"b":[{},null,"Hello"]}}
输出：{"key":{"a":1,"b":[{},null,"Hello"]}}
解释：
对象和数组可以包括其他对象和数组。

示例 4：
输入：object = true
输出：true
解释：
基本类型是有效的输入
 
提示：
value 是一个有效的 JSON 值
1 <= JSON.stringify(object).length <= 105
maxNestingLevel <= 1000
所有字符串只包含字母数字字符 
 
*/

// 调试命令: ts-node ./src/json/jsonStringify.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Spreadable = JSONValue[] | Record<string, JSONValue>;

function jsonStringify(object?: JSONValue): string {
  if (isSpreadable(object)) {
    return serialize(object);
  } else {
    return dealNormal(object);
  }
}

function dealNormal(v: null | boolean | number | string) {
  return typeof v === 'string' ? `"${v}"` : String(v);
}

function serialize(obj: Spreadable): string {
  if (Array.isArray(obj)) {
    return `[${obj.map(ele => (isSpreadable(ele) ? serialize(ele) : dealNormal(ele))).join(',')}]`;
  } else {
    const cnt = [];
    const keys = Object.keys(obj);
    for (const k of keys) {
      const v = obj[k];
      cnt.push(`${dealNormal(k)}:${isSpreadable(v) ? serialize(v) : dealNormal(v)}`);
    }
    return `{${cnt.join(',')}}`;
  }
}

function isRealObj(obj: unknown): obj is Record<string, JSONValue> {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function isSpreadable(obj: unknown): obj is Spreadable {
  return Array.isArray(obj) || isRealObj(obj);
}

console.log(jsonStringify({ y: 1, x: 2 }));
console.log(jsonStringify({ a: 'str"', b: -12, c: true, d: null }));
console.log(jsonStringify({ key: { a: 1, b: [{}, null, "'Hello"] } }));
console.log(jsonStringify(true));
console.log(jsonStringify(1));
console.log(jsonStringify(NaN));
console.log(jsonStringify('abc'));
