/**
 * 整数个数
 * 链接：https://ac.nowcoder.com/acm/problem/14516
 * 题目描述
 * 给定k（k大于1且小于50）个正整数，其中每个数都是大于等于1，小于等于10的数。写程序计算给定的k个正整数中，1，5和10出现的次数。
 * 输入描述:
 * 输入数据只有一组，第一行包含一个正整数k（k大于1且小于100），第二行包含k个正整数，每两个正整数用一个空格分开。
 * 输出描述:
 * 输出有三个数，第一个数为1出现的次数，第二个数为5出现的次数，第三个数为10出现的次数且后面没有多于的空格，每个数间用一个空格隔开，每两组数据间用一空行分开。
 *
 * 示例1
 * 输入
 * - 5
 * - 1 5 8 10 5
 * 输出
 * - 1 2 1
 */
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const lines = [];

rl.on('line', line => lines.push(line));

rl.on('close', () => {
  const [n, arr] = lines;
  const nums = arr.split(/\s+/);
  let c1 = 0;
  let c5 = 0;
  let c10 = 0;
  for (const s of nums) {
    if (s === '1') {
      c1++;
    } else if (s === '5') {
      c5++;
    } else if (s === '10') {
      c10++;
    } else {
      continue;
    }
  }
  console.log(c1, c5, c10);
});
