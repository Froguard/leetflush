// https://leetcode.cn/problems/factorial-generator/

/*
阶乘生成器

编写一个生成器函数，该函数以一个整数 n 作为参数，并返回一个生成器对象，该生成器对象可以生成 阶乘序列 。

阶乘序列 的定义如下：n! = n * (n-1) * (n-2) * ... * 2 * 1 。

0 的阶乘被定义为 1。

示例 1：
输入：n = 5
输出：[1,2,6,24,120]
解释：
const gen = factorial(5)
gen.next().value // 1
gen.next().value // 2
gen.next().value // 6
gen.next().value // 24
gen.next().value // 120

示例 2：
输入：n = 2
输出：[1,2]
解释：
const gen = factorial(2) 
gen.next().value // 1 
gen.next().value // 2 

示例 3：
输入：n = 0
输出：[1]
解释：
const gen = factorial(0) 
gen.next().value // 1 
 

提示：

0 <= n <= 18 
 
*/
// [uncommit]
// 调试命令: ts-node ./src/generator/factorial.ts

function* factorial(n: number): Generator<number> {
  if (n === 0) {
    yield 1;
  } else {
    let start: number = 1;
    for (let i = 1; i <= n; i++) {
      start *= i;
      yield start;
    }
  }
}

/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */

const gen = factorial(2);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
