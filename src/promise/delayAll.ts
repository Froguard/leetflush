// https://leetcode.cn/problems/delay-the-resolution-of-each-promise/

/*
延迟每个 Promise 对象的解析

给定一个函数数组 functions 和一个数字 ms，返回一个新的函数数组。

functions 是一个返回 Promise 对象的函数数组。
ms 表示延迟的时间，以毫秒为单位。它决定了在新数组中的每个函数返回的 Promise 在解析之前等待的时间。
新数组中的每个函数应该返回一个 Promise 对象，在延迟了 ms 毫秒后解析，保持原始 functions 数组中的顺序。delayAll 函数应确保从 functions 中的每个 Promise 都被延迟执行，形成返回延迟的 Promise 的函数的新数组。

示例 1：
输入：
functions = [
   () => new Promise((resolve) => setTimeout(resolve, 30))
], 
ms = 50
输出：[80]
解释：数组中的 Promise 在 30 毫秒后解析，但被延迟了 50 毫秒，所以总共延迟了 30 毫秒 + 50 毫秒 = 80 毫秒。

示例 2：
输入：
functions = [
    () => new Promise((resolve) => setTimeout(resolve, 50)),
    () => new Promise((resolve) => setTimeout(resolve, 80))
], 
ms = 70
输出：[120,150]
解释：数组中的 Promise 在 50 毫秒和 80 毫秒后解析，但它们被延迟了 70 毫秒，所以总共延迟了 50 毫秒 + 70 毫秒 = 120 毫秒 和 80 毫秒 + 70 毫秒 = 150 毫秒。
 

提示：
functions 是一个返回 Promise 对象的函数数组
10 <= ms <= 500
1 <= functions.length <= 10
*/

// 调试命令: ts-node ./src/promise/delayAll.ts

type FnRetPrms = () => Promise<any>;

function delayAll(functions: FnRetPrms[], ms: number): FnRetPrms[] {
  return functions.map(
    fun => () =>
      fun().then(
        (res: any) => delayResolve(res, ms),
        (err: any) => delayResolve(err, ms),
      ),
  );
}

function delayResolve(data: any, time: number) {
  return new Promise(resolve => setTimeout(() => resolve(data), time));
}
