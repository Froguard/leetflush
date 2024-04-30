// https://leetcode-cn.com/problems/longest-common-subsequence
/**
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

 

示例 1：

输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
 

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。
*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  if (!text1 || !text2) {
    return 0;
  }
  if (text1 == text2) {
    return text1.length;
  }
  const L1 = text1.length;
  const L2 = text2.length;
  /**
   * dp[i][j] 表示 text1.substring(0,i) 和 text2.substring(0,j) 的最大公共子序列的长度
   *     注意：substring(0,i) 是不包含第 i 个字符的，所以要求 text1 和 text2 的最大公共子序列长度
   *          - 应该是：dp[text1.length][text2.length] 的值
   * - 当 i 或 j 为 0 时，dp[i][j] = 0;
   *     - 解释：当 i或j为0，说明 对比的字符串子串长度为0，说明没有公共子序列
   *
   * - 当 text1[i-1] === text2[j-1] 时，dp[i][j] = dp[i-1][j-1] + 1
   *     - 解释：当t1[i-1] == t2[j-1] 这两个位置上的字符相等时，至少能说明一个问题
   *           - 在他们之前的对比字符串子串，无论如何，在加上这两个字符之后，会+1，即右下角 dp[i][j] 是等于它 + 1
   * - 当 text1[i-1] !== text2[j-1] 时，dp[i][j] = Max{ dp[i-1][j],  dp[i][j-1] }
   *     - 解释：当t1[i-1] != t2[j-1],即不相等，则会出现两种情况
   *           - 情况1：t1.substring(0,i-1) 和 t2.substring(0,j) 公共子序列较长
   *           - 情况2：t1.substring(0,i) 和 t2.substring(0,j-1) 公共子序列较长
   *           - 这种情况，取最大值即可
   */
  let dp = [];
  // let solution = []; // 求取最后最长子序列的内容用 solution[i][j] 即，当前的 dp[i][j] 的值是从哪个位置推算出来的
  for (let i = 0; i <= L1; i++) {
    dp[i] = dp[i] || [];
    // sulution[i] = sulution[i] || [];
    for (let j = 0; j <= L2; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
        // sulution[i][j] = 0;
      } else {
        if (text1[i - 1] == text2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          // solution[i][j] = '↖'; // 左上角
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          // solution[i][j] = dp[i][j] == dp[i-1][j] ? '↑' : '←';
        }
      }
    }
  }
  /*
    function getLCS(solution){
        let res = [];
        let i = L1;
        let j = L2;
        let slt;
        while (slt != 0) {
            slt = solution[i][j];
            if (slt == '↖') {
                res.unshift(text1[i-1]);
                i--;
                j--;
            } else if (slt == '↑') {
                i--;
            } else if (slt == '←') {
                j--;
            } else {
                break;
            }
        }
        return res.join('');
    }
    let lcsContent = getLCS(solution);
    */
  return dp[L1][L2];
};
