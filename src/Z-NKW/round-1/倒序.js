/**
 * 倒序
 * - 【注意】这里并不是排序输出，而是按照输入顺序直接反过来打印
 * 牛客网：https://ac.nowcoder.com/acm/problem/21993
 * 题目描述
 * 输入三个数，反序输出这三个数。
 * 输入描述:
 * 输入三个整数a, b , c 以空格隔开
 * 0<=𝑎,𝑏,𝑐<=2^31−1
 * 0<=a,b,c<=2^31−1
 * 输出描述:
 * 输出一行，三个整数，以空格隔开
 * 示例1
 * - 输入: 2 6 9
 * - 输出: 9 6 2
 */
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('line', line => {
  // // console.log('line:', line);
  // let array = line.split(/\s+/);
  // // console.log('numbers:', array);
  // array.reverse(); // 原地改变
  // console.log(array.join(' '));
  console.log(line.split(/\s+/).reverse().join(' '));
  process.exit();
});
