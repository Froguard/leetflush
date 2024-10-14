/**
 * 斐波那契
 * 链接：https://ac.nowcoder.com/acm/problem/232608
 *
 * 题目描述
 * 小蒜蒜最近学习了斐波那契数列。 斐波那契数列是指这样的数列：数列的第一个和第二个数都为 1，接下来每个数都等于前面 2 个数之和。
 * 输入描述:
 * 输入一行，包含一个正整数 k。（1 ≤ k ≤ 50）
 * 输出描述:
 * 输出一行，包含一个正整数，表示斐波那契数列中的第 k 个数
 *
 * 示例1
 * 输入
 * - 19
 * 输出
 * - 4181
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const n = parseInt(line);
  console.log(fabonacci(n));
  process.exit();
});

// n >= 1
function fabonacci(n) {
  if (n <= 2) {
    return 1;
  }
  let fn_1 = 1;
  let fn_2 = 1;
  let sum = fn_1 + fn_2;
  for (let i = 3; i <= n; i++) {
    sum = fn_1 + fn_2;
    fn_1 = fn_2;
    fn_2 = sum;
  }
  return sum;
}
