// https://leetcode.cn/problems/json-deep-equal/description/

/*
完全相等的 JSON 字符串， 完全相等的对象比较

给定两个对象 o1 和 o2 ，请你检查它们是否 完全相等 。

对于两个 完全相等 的对象，必须满足以下条件：

如果两个值都是原始类型，它们通过了 === 等式检查，则认为这两个值是 完全相等 的。
如果两个值都是数组，在它们具有相同元素且顺序相同，并且每个元素在这些条件下也 完全相等 时，认为这两个值是 完全相等 的。
如果两个值都是对象，在它们具有相同键，并且每个键关联的值在这些条件下也 完全相等 时，认为这两个值是 完全相等 的。
你可以假设这两个对象都是 JSON.parse 的输出。换句话说，它们是有效的 JSON 。

请你在不使用 lodash 的 _.isEqual() 函数的前提下解决这个问题。

示例 1：
输入：o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
输出：true
输入：键和值完全匹配。

示例 2：
输入：o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
输出：true
解释：尽管键的顺序不同，但它们仍然完全匹配。

示例 3：
输入：o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
输出：false
解释：数字数组不同于字符串数组。

示例 4：
输入：o1 = true, o2 = false
输出：false
解释：true !== false
 
提示：
1 <= JSON.stringify(o1).length <= 105
1 <= JSON.stringify(o2).length <= 105
maxNestingDepth <= 1000 
 
*/

// 调试命令: ts-node ./src/obj/areDeeplyEqual.ts

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function areDeeplyEqual(objA: JSONValue, objB: JSONValue): boolean {
  if (objA === objB) {
    return true;
  } else {
    const typeA = Object.prototype.toString.call(objA); // 能够精准的剔除出 null，但不能区别 NaN 和正常数字
    const typeB = Object.prototype.toString.call(objB);
    if (typeA === typeB) {
      if (typeA === '[object Array]' || typeA === '[object Object]') {
        const o1 = objA as Record<any, any>;
        const o2 = objB as Record<any, any>;
        const keysA = Object.keys(o1);
        const keysB = Object.keys(o2);
        if (keysA.length !== keysB.length) {
          return false;
        }
        for (const k of keysA) {
          const v1 = o1[k];
          const v2 = o2[k];
          if (!areDeeplyEqual(v1, v2)) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    return false;
  }
}
