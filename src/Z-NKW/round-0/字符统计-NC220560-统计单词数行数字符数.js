/**
 * 链接：https://ac.nowcoder.com/acm/problem/220560
 *
 * 题目描述
 * 给出一段字符，请统计这段字符有几行，几个单词和几个字符。
 * 定义单词为用空格或者换行符隔开的连续字符
 * 字符定义为包括一般可见字符以及空格
 *
 * 输入描述:
 * - 第一行一个正整数 𝑇, 代表测试数据的组数
 * - 第二行开始为第一组测试数据，测试数据每行不超过 1024个字符
 * 每两组测试数据之间用连续的
 * 5个= 即 '=====' 分隔，保证测试数据中不会出现连续的
 *
 * 输出描述:
 * 每组测试数据在一行中输出由空格分隔的3个整数，分别代表行数，单词数和字符数
 *
 * 示例1
 * 输入：
2
This is a sample input.
 Hello World!!
=====
The speech by Hunyak, translated, is:
"What am I doing here?
They say, the famous Hungarian police,
that I held down my husband and chopped off his head.

But I didn't do it, I am not guilty.
I can't believe that Uncle Sam says I did it.
They say I didit, but really I didn't."
 *
 * 输出：
2 7 37
8 55 270
 * 说明：
 * 对于第一个样例，有2行7个单词是显而易见的
 * 有28个字母，3个标点符号以及6个空格，所以共有37个字符
 * 请注意换行符不算在字符个数里
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => {
  const [n, ...tests] = lines;
  let tmpCase = [];
  for (const t of tests) {
    if (t === '=====') {
      printRes(tmpCase);
      tmpCase = [];
      continue;
    } else {
      tmpCase.push(t);
    }
  }
  if (tmpCase.length) {
    printRes(tmpCase);
  }
});
function printRes(testCase) {
  const lines = testCase.length;
  let words = 0;
  let chars = 0;
  for (const l of testCase) {
    words += l.split(/\s+/).filter(s => s.trim()).length;
    chars += l.length;
  }
  console.log(lines, words, chars);
}
