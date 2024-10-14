// https://leetcode.cn/problems/partial-function-with-placeholders/

/*
带有占位符的部分函数

给定函数 fn 和数组 args，返回一个函数 partialFn。

args 中的占位符 "_" 需要用 restArgs 中索引从 0 开始的值替换。 restArgs 中剩余的值则添加到 args 的末尾。

partialFn 应该返回 fn 的结果。fn 应该使用修改后的 args 的元素作为单独的参数调用。

示例 1：
输入：fn = (...args) => args, args = [2,4,6], restArgs = [8,10]
输出：[2,4,6,8,10]
解释：
const partialFn = partial(fn, args)
const result = partialFn(...restArgs) 
console.log(result) // [2,4,6,8,10]
args 中没有占位符 "_"，因此 restArgs 只是添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。

示例 2：
输入：fn = (...args) => args, args = [1,2,"_",4,"_",6], restArgs = [3,5]
输出：[1,2,3,4,5,6]
解释：
const partialFn = partial(fn, args) 
const result = partialFn(...restArgs) 
console.log(result) // [1,2,3,4,5,6] 
占位符 "_" 被 restArgs 中的值替换。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。

示例 3：
输入：fn = (a, b, c) => b + a - c, args = ["_", 5], restArgs = [5, 20]
输出：-10
解释：
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // -10

占位符 "_" 被替换为 5，并将 20 添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回 -10（5 + 5 - 20）。
 
提示：
fn 是一个函数
args 和 restArgs 都是有效的 JSON 数组
1 <= args.length <= 5 * 104
1 <= restArgs.length <= 5 * 104
0 <= number of placeholders <= restArgs.length 
*/

// 调试命令: ts-node ./src/function/partial.ts

// [uncommit]

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue;

function partial(fn: Fn, args: JSONValue[]): Fn {
  //
  return function (...restArgs) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '_') {
        args[i] = restArgs.shift();
      }
    }
    if (restArgs.length) {
      args.push(...restArgs);
    }
    return fn(...args);
  };
}
