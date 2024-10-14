/**
 * 链接：https://ac.nowcoder.com/acm/problem/276149
 * 题目描述
 * 对于给定的正整数 z ，你需要寻找两个不同的正整数 x 和 y ，使得 x+y=z 成立。如果不存在这样的 x 和 y ，你只需要输出 NO
 *
 * 输入描述:
 * 在一行上输入一个整数
 * 𝑧 (1≤𝑧≤2⋅10^5)
 * 输出描述:
 * 如果存在符合要求的答案，你需要先输出
 * YES, 随后在第二行上输出两个正整数 x 和 𝑦 代表你的答案；否则，直接输出 NO
 *
 * 示例1
 * 输入
 * 2
 * 输出
 * NO
 * 示例2
 * 输入
 * 3
 * 输出
 * YES
 * 1 2
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const n = parseInt(line);
  if (n <= 2) {
    console.log('NO');
  } else {
    console.log('YES');
    console.log(1, n - 1);
  }
  process.exit();
});

