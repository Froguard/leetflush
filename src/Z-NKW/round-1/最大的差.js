/**
 * 链接：https://ac.nowcoder.com/acm/problem/204457
 * 题目描述
 * 给定n个数字，请你从中选出两个数字，使得这两个数字的差尽量大，输出这个最大的差。
 * 输入描述:
 * 第一行是一个正整数 n(2≤n≤10^5)。
 * 第二行有n个空格隔开的整数，数字的绝对值不超过
 * 10^5
 *
 * 输出描述:
 * 输出一个整数，表示最大的差值。
 *
 * 示例1
 * 输入
 * 3
 * 1 2 1
 * 输出
 * 1
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => {
  const [n, numsStr] = lines;
  const nums = numsStr.split(/\s+/);
  let max = -100000;
  let min = 100000; // Math.Infinty;
  for (const s of nums) {
    const n = parseInt(s);
    max = max < n ? n : max;
    min = min > n ? n : min;
  }
  console.log(max - min);
});
