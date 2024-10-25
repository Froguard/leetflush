/**
 * 跳台阶【简单】
 * // https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=295&tqId=23261&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * //
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number int整型
 * @return int整型
 */
function jumpFloor(number) {
  /**
   * 第零解题：0 中（只是为了补位，表示不跳，没实际意义）
   * 第一阶梯：1 种（直接上）
   * 第二阶梯：2 种
   *   - 跳法 1：先上 1 梯，然后再上 1 梯
   *   - 跳法 2：直接跳到 2 梯
   * ...
   * 第 N 阶梯：f(n),其跳法数量为：【跳到第 n-1 阶梯的跳法数】  + 【跳到第 n-2 阶梯的跳法数】，即：
   *   - 从 n-1 再跳 1 梯，到达 n，对应跳法数量，f(n-1)
   *   - 从 n-2 再跳 2 梯，到达 n，对应跳法数量，f(n-1)
   *   即：f(n)=f(n-1)+f(n-2)
   */
  const dp = [0, 1, 2];
  if (number <= 2) {
    return dp[number];
  }
  for (let i = 3; i <= number; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[number];
}

module.exports = {
  jumpFloor: jumpFloor,
};
