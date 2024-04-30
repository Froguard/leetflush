// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
/**
【单次交易股票的最大收益】

【重点题】股票的最大利润

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的股价。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票股价 = 1）的时候买入，在第 5 天（股票股价 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出股价需要大于买入股价；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：
1 <= prices.length <= 105
0 <= prices[i] <= 104

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || !prices.length || prices.length === 1) {
    return 0;
  }
  /*
    // 方法一：循环求出在每天买入，之后可能的最大收益即可
    // 当数组很大的时候，会超时
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        let Pb = prices[i];
        let maxP2 = Pb;
        for (let j = i + 1; j < prices.length; j++) {
            let Ps = prices[j];
            if (maxP2 < Ps) {
                maxP2 = Ps;
            }
        }
        let dis = maxP2 - Pb;
        max = max > dis ? max : dis;
    }
    return max;
    */
  // 方法二：动态规划 前i天的最大收益 = max{前i-1天的最大收益，第i天的股价-前i-1天中的最小股价}
  /**
   * 动态规划解题三步骤：
   * 1.定义子问题，即定义状态
   * 2.定义状态转移规则，即定义状态之间的地推关系
   * 3.找到初始状态
   *
   * 1.定义状态：前 i 天的最大收益，即 f(i)，那前 i - 1 天最大收益就是 f(i-1)
   *
   * 2.找规律：
   * - 假设前 i-1 天的最低股价为 Pb；买入Pb后可卖出的最高股价为 Ps；f(i-1)=(Ps-Pb)
   * - 假设第 i 天股价为 Pn
   * - 最大收益不可能为负数，最多没有收益，即最大收益的最小值为0，(Pb<=Ps) 始终成立
   *
   *   1）情况1 总体股价下降趋势：
   *
   *     Pb___ Ps                  Ps
   *           \                 /    \
   *            \Pn             Pb     Pn
   *   （前i-1天最大收益为0）    (前i-1天最大收益为正)
   *   此时：(Pn-Pb) < (Ps-Pb)
   *   即:  (Pn-Pb) < f(i-1)
   *   f(i) = f(i-1)
   *
   *   2）情况2 总体股价持平趋势：
   *
   *     Pb___ Ps___Pn             Ps___ Pn
   *                              /
   *                            Pb
   *   （前i-1天最大收益为0）    (前i-1天最大收益为正)
   *   此时：(Pn-Pb) = (Ps-Pb)
   *   即： (Pn-Pb) = f(i-1)
   *   则：f(i) = f(i-1) = (Pn-Pb)
   *
   *   3）情况三 总体估价上升趋势
   *
   *             Pn                    Pn
   *            /                     /
   *    Pb___ Ps                    Ps
   *                               /
   *                             Pb
   *   （前i-1天最大收益为0）    (前i-1天最大收益为正)
   *   此时：(Pn-Pb) > (Ps-Pb)
   *   即： (Pn-Pb) > f(i-1)
   *   则： f(i) = (Pn-Pb)
   *
   *    三种情况综合下来看，得到公式
   *    f(i) = max{ (Pn-Pb), f(i-1) }
   *
   * 3. 找到初始值
   * 考虑到只能先买入，再卖出，故而只能从第2天开始算
   * - 当第2天时，第1天之前最小值为Pb，第1天之前最大收益0，此时第2天最大收益 = max((Ps-Pb), 0)，买入最小值为 min(Ps,Pb)
   * - 当第3天时，第2天之前最小值为min(Pb,Ps)，第2天之前最大收益为max((Ps-Pb), 0)，此时第3天最大收益 = max((Pn-min(Ps,Pb)), max((Ps-Pb)))
   *
   */
  let Pb = prices[0]; // Pb 始终未区间内的最低价格
  let dp = [0]; // 即：dp[0]=0
  for (let i = 1; i < prices.length; i++) {
    let Pn = prices[i];
    dp[i] = Math.max(dp[i - 1], Pn - Pb);
    Pb = Math.min(Pb, Pn); // 及时更新最小值，确保Pb是区间内最小值
  }
  let n = prices.length - 1; // 最后一天
  return dp[n];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
