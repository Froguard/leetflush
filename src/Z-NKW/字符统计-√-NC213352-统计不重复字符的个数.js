/**
 * 字符统计
 * 链接：https://ac.nowcoder.com/acm/problem/213352
 * 题目描述
 * 我们认为以下三种类型的字符是合法的：
 * 1.阿拉伯数字0~9
 * 2.小写字母a~z
 * 3.大写字母A~Z
 *
 * 保证输入一个字符串，字符串中所有字符均是合法的。
 * 请你统计一下字符串中存在多少种字符，两个字符不属于同一种，当且仅当两者的ASCII码不同
 * 输入描述:
 * 一个字符串
 * 输出描述:
 * 输出一个数，代表存在多少种字符
 *
 * 示例1
 * 输入
 * - Aa0
 * 输出
 * - 3
 * 备注: 字符串长度不超过1000
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const chars = line.split('');
  const res = new Set();
  for (const c of chars) {
    if (c.match(/[a-z]/i) || c.match(/[0-9]/)) {
      res.add(c);
    }
  }
  console.log(res.size);
});
