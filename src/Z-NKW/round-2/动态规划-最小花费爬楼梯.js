/**
 * 最小花费爬楼梯
 * // https://www.nowcoder.com/practice/6fe0302a058a4e4a834ee44af88435c7?tpId=295&tqId=2366451&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * // https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param cost int整型一维数组
 * @return int整型
 */
function minCostClimbingStairs(cost) {
  /**
   * 1.定义状态
   * dp[n] 表示爬到第 N 台阶的最小花费
   *
   * 2.找到规律
   * 由于每一次爬，只能爬 1 个台阶，或者爬 2 个台阶。则爬到第 N 台阶，它只能是如下两种情况之一：
   * - 从 N-1 爬上来，即爬了 1 个台阶，花费为 dp[n-1] + 第 N-1 台阶的花销，即：dp[n-1]+cost[n-1]
   * - 从 N-2 爬上来，即爬了 2 个台阶，花费为 dp[n-2] + 第 N-2 台阶的花销，即：dp[n-2]+cost[n-2]
   * 则：dp[n] = Min( dp[n-1]+cost[n-1] , dp[n-2]+cost[n-2] ); // 即：取两者中最小的花费
   *
   * 3.定义初值
   * - 第 0 台阶：初始台阶，到达这里不花钱
   *   - 即：dp[0] = 0
   * - 第 1 台阶：如果从第 0 台阶开始爬，理论上需要花费 cost[0] 的钱，但是，题目说了，你可以直接从第 1 台阶开始，所以，到达这里理论上也可以不花钱
   *   - 即：dp[1] = 0
   */
  const n = cost.length;
  const dp = [0, 0];
  if (n <= 1) {
    return dp;
  }
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + cost[i - 1], //
      dp[i - 2] + cost[i - 2],
    );
  }
  return dp[n];
}
module.exports = {
  minCostClimbingStairs: minCostClimbingStairs,
};
