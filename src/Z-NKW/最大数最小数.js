/**
 * 链接：https://ac.nowcoder.com/acm/problem/22015
 *
 * 题目描述
 * 输入三个数，输出最大数，最小数
 *
 * 输入描述:
 * 输入一行，包含三个整数a, b , c
 *   1 ≤ 𝑎,𝑏,𝑐 ≤ 1000000
 *   1 ≤ a,b,c ≤ 1000000
 *
 * 输出描述:
 * 输出两行，第一行输出最大数，第二行输出最小数。具体格式见样例输出。
 * 示例1
 * 输入
 * 1 2 3
 * 输出
 * The maximum number is : 3
 * The minimum number is : 1
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const nums = line.split(/\s+/);
  let max = 0;
  let min = 1000000; // Math.Infinty;
  for (const s of nums) {
    const n = parseInt(s);
    max = max < n ? n : max;
    min = min > n ? n : min;
  }
  console.log(`The maximum number is : ${max}`);
  console.log(`The minimum number is : ${min}`);
});

