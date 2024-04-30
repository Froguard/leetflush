// https://leetcode.cn/problems/convert-json-string-to-object/

/**
给定一个字符串 str ，返回 JSON 解析后的 parsedStr 。你可以假设 str 是一个有效的 JSON 字符串，因此它只包含字符串、数字、数组、对象、布尔值和 null。str 不会包含不可见字符和转义字符。

请在不使用内置的 JSON.parse 方法的情况下解决此问题。

示例 1：
输入：str = '{"a":2,"b":[1,2,3]}'
输出：{"a":2,"b":[1,2,3]}
解释：返回由 JSON 字符串表示的对象。

示例 2：
输入：str = 'true'
输出：true
解释：原始类型是有效的 JSON。

示例 3：
输入：str = '[1,5,"false",{"a":2}]'
输出：[1,5,"false",{"a":2}]
解释：返回由 JSON 字符串表示的数组。
*/

// ts-node ./src/json/json-parse.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function jsonParse(str: string): JSONValue {
  return new Function(`return ${str};`)();
}
