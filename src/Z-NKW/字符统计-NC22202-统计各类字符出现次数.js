/**
 * 字符统计
 * 链接：https://ac.nowcoder.com/acm/problem/22202
 * 题目描述
 * 输入一串字符，以“?”结束。统计其中字母个数，数字个数，其它符号个数。
 * 输入描述:
 * 输入一行，包含若干个字符，以”?”结尾。
 * 输出描述:
 * 输出三行，每行包含一个整数，依次为字母个数，数字个数，其他符号个数。
 * 示例1
 * 输入
 * ab123!?
 * 输出
 * - Letters=2
 * - Digits=3
 * Others=1
 *   备注:
 *   空格也可能是一个字符
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  const chars = line.split('');
  let l = 0,
    n = 0,
    o = 0;
  for (const c of chars) {
    if (c === '?') {
      break;
    }
    if (c.match(/[a-z]/i)) {
      // i 标识忽略大小写
      l++;
    } else if (c.match(/[0-9]/)) {
      n++;
    } else {
      o++;
    }
  }
  console.log([`Letters=${l}`, `Digits=${n}`, `Others=${o}`].join('\n'));
  process.exit();
});

