/**
 * 不同路径的数目(一)-机器人走格子，【简单】
 * // https://www.nowcoder.com/practice/166eaff8439d4cd898e3ba933fbc6358?tpId=295&tqId=685&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/unique-paths
 *
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
function uniquePaths(m, n) {
  /**
   * 核心思想：动态规划
   * 1.定状态，dp[i][j] 表示终点坐标为(i,j)时候，路径数量
   * 2.定规律，由于每次只能往右走，或者往下走，所以到达点坐标为(i,j)，只能有如下两种情况：
   *   - 情况1：从上一排节，往下走，即 (i-1) --> (i,j), 对应走法路径数量 dp[i-1][j]
   *   - 情况2：从左边列，往右边走，即 (i,j-1) --> (1,j), 对应走法路径数量 dp[i][j-1]
   *   即：dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
   * 3.定初值：为方便计算和处理，可以把起点坐标定为(1,1),重点坐标定为(m,n)
   *   dp[1][1] = 1;
   */
  const dp = [];
  for (let i = 1; i <= m; i++) {
    dp[i] = dp[i] || [];
    for (let j = 1; j <= n; j++) {
      if (i == 1 || j == 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
}

module.exports = {
  uniquePaths: uniquePaths,
};
