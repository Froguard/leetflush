// https://leetcode-cn.com/problems/number-complement
// https://leetcode-cn.com/problems/complement-of-base-10-integer/
/**
给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。

示例 1：
输入：num = 5
输出：2
解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。

示例 2：
输入：num = 1
输出：0
解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。

*/

/**
 * 101 ^ 011 = 010
 * 即：
 *   101
 * ^ 011
 * ------
 *   010
 *
 * ^异或操作，只要不同，就返回1
 * - 1^0=1; 0^1=1
 * - 0^0=0; 1^1=1
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // 分析：
  let c = 1;
  while (c < num) {
    c = (c << 1) + 1;
  }
  return num ^ c;
};
