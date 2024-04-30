// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
/**
给定一个数字，我们按照如下规则把它翻译为字符串：
0 翻译成 “a” ，
1 翻译成 “b”，
……，
11 翻译成 “l”，
……，
25 翻译成 “z”。

一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 
提示：
0 <= num < 231
*/
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let s = `${num}`;
  if (s.length == 1) {
    return 1;
  }

  let dp = [];
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    /**
     *
     * dp[i] = part1 + part2
     * - part1 = dp[i-1]
     * - part2 ：当 s[i-2]和s[i-1]组成数字在 [10,25] 之间，且 i>=2 时，part2 = dp[i-2]
     * 即最好状况下： dp[i] = dp[i-1] + dp[i-2]
     **/
    let part1 = dp[i - 1];
    let part2 = 0;
    if (i >= 2) {
      let n = parseInt(`${s[i - 2]}${s[i - 1]}`);
      if (10 <= n && n <= 25) {
        part2 = dp[i - 2];
      }
    }
    dp[i] = part1 + part2;
  }
  return dp[dp.length - 1]; // dp.pop();
};
