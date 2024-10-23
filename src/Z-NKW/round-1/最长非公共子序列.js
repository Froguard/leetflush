/**
 * 链接：https://ac.nowcoder.com/acm/problem/205274
 *
 * 题目描述
 * Lemon 丢给你两个字母序列 s1 和 s2，并无情地交给了你一个奇怪的任务——求最长非公共子序列。
 * 序列 a 是 b 的子序列，当且仅当从 b 中删除一些元素（可以是零个或所有）能得到 a。
 * 例如：
 * 我们可以通过从 "abcde" 中删除 "b" 和 "d" 得到 "ace"，因此 "ace" 是 "abcde" 的子序列。
 * 同理 "abcde"，"e" 和 空串 都是 "abcde" 的子序列；
 * 但 "abdc" 不是 "abcde" 的子序列。
 * 序列 c 是
 * s1 和 s2 的非公共子序列当且仅当它满足以下条件中的任何一个：
 * c 是 s1 的子序列但不是 s2 的子序列；
 * c 是 s2 的子序列但不是 s1 的子序列；
 * s1 和 s2 的非公共子序列可能有很多，你只需要求出其中长度最长的非公共子序列的长度。
 *
 * 输入描述:
 * 链接：https://ac.nowcoder.com/acm/problem/205274
 * 第一行包含一个字符串 s1 第二行包含一个字符串 s2, 1≤∣s1∣,∣s2∣≤5000)
 * 输入保证 s1 和 s2 均只包含小写字母。
 *
 * 输出描述:
 * 在一行输出一个整数，表示最长非公共子序列的长度。
 * 特别地，如果不存在非公共子序列，输出 -1 。
 *
 * 实例 1：
 * 输入：
 * - aba
 * - abc
 * - 3
 *
 * 对于第一个样例：非公共子序列有："c"，"ba"，"bc"，"aba"，"abc"，其中长度最大为 3。
 *
 * 实例 2
 * 输入：
 * - lemon
 * - lemon
 * 输出：
 * - -1
 *
 * 对于第二个样例：找不到任何非公共子序列。
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.srdout,
});
const lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => {
  const [str1, str2] = lines;
  // 陷阱：最长非公共子串，只要两个字符串不一样，就一定有最长非公共子串，且长度最大为两个字符串的长度中较大的那个。
  console.log(str1 === str2 ? -1 : Math.max(str1.length, str2.length));
});
