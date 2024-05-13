// https://leetcode.cn/problems/generate-fibonacci-sequence/

/*
生成菲波那切数列，生成斐波那契数列

请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。

斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。

这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。

示例 1：
输入：callCount = 5
输出：[0,1,1,2,3]
解释：
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

示例 2：
输入：callCount = 0
输出：[]
解释：gen.next() 永远不会被调用，所以什么也不会输出
 
提示：
0 <= callCount <= 50
*/
// 调试命令: ts-node ./src/generator/fibGenerator.ts

function* fibGenerator(): Generator<number, any, number> {
  let i = 0;
  let fi_2 = 0;
  let fi_1 = 1;
  let res = 0;
  // unstoppable loop
  while (1) {
    if (i === 0) {
      res = 0;
    } else if (i === 1) {
      res = 1;
    } else {
      res = fi_1 + fi_2; // f(i) = f(i-1) + f(i-2)
      fi_2 = fi_1;
      fi_1 = res;
    }
    i++;
    yield res;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13
