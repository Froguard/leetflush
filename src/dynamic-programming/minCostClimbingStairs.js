// https://leetcode-cn.com/problems/min-cost-climbing-stairs/

/**
使用最小花费爬楼梯
数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

示例 1：
输入：cost = [10, 15, 20]
输出：15
解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。

示例 2：
输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出：6
解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
 
提示：
cost 的长度范围是 [2, 1000]。
cost[i] 将会是一个整型数据，范围为 [0, 999] 。
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  /**
     【重要提示】容易被误解的点
     cost[i] 代表的是，当你踩在这块阶梯上，你想要在往下走，无论接下来走1步还是2步，只要你走出这阶梯，你就需要支付cost[i]的钱
     即：cost[i]是一个【起跳花费】，代表站在i台阶上起跳，需要支付的金额
     有两个特殊，当踩在楼底时，无论是跳到 a0 还是 a1，只要不跳出去，都不需要花费钱，即消费为0

     分析，还是动态规划的解法 [楼底, a0,a1,a2,...,an, 楼顶]
     上面的楼底和楼顶，只是为了方便理解，实际cost数组为 [a0,a1,a2,...,an],length为n+1

     1. 定状态：到第 n 个解题的最小化费为 f(n)，代表跳到第 n 级台阶时候所需要的最小
     2. 找规律：fn = min{ f(n-1)+A[n-1], f(n-2)+A[n-2] }
     3. 找初值：
        - f(0) = 0; // [楼底, a0] → 直接跳1步到a0，由于不跳出a0，故而花费0
        - f(1) = 0; // [楼底, a0, a1] → 直接跳2步到a1，由于不跳出a0，花费0
     4. 特殊：
        - f(n) 这是最后一级阶梯，但是并不是代表其在「楼顶」，最后一级台阶后边才是楼顶
        - 正确求解，应该是 f(n+1) 才是最终解，对于一个长度为 length 的数组，n = length - 1 ==> n + 1 = length
     */
  // 方法一，递归法+备忘录算法
  /*
    const cached = new Map();
    function f(i) {
        let cache = cached.get(i);
        if (cache!==undefined) {
            return cache;
        }
        let res;
        if (i <= 0) {
            res = 0;
        } else if (i == 1) {
            res = 0;
        } else {
            res = Math.min(
                (f(i-1)+cost[i-1]),
                (f(i-2)+cost[i-2])
            );
        }
        cached.set(i, res);
        return res;
    }
    let min = f(cost.length);
    // console.log(cached);
    return min;
    */
  // 方法二，循环累计法
  let f = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    f[i] = Math.min(f[i - 2] + cost[i - 2], f[i - 1] + cost[i - 1]);
  }
  return f[cost.length];
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
