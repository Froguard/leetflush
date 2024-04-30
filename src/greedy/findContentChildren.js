// https://leetcode-cn.com/problems/assign-cookies
/**
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 
示例 1:
输入: g = [1,2,3], s = [1,1]
输出: 1
解释:
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。

示例 2:
输入: g = [1,2], s = [1,2,3]
输出: 2
解释:
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
 
提示：
1 <= g.length <= 3 * 10^4
0 <= s.length <= 3 * 10^4
1 <= g[i], s[j] <= 2^31 - 1
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (s.length === 0) {
    return 0;
  }
  // 将 g 和 s都升序排列
  g.length > 1 && g.sort((a, b) => a - b); // 小孩
  s.length > 1 && s.sort((a, b) => a - b); // 饼干
  while (g[0] > s[0]) {
    // 最小胃口的孩子，其胃口大于最小饼干时，这些小饼干需要被丢掉！
    s.shift();
  }
  if (s.length === 0) {
    return 0;
  }

  let child = 0; // 能满足的小孩数
  let i = 0;
  while (i < g.length) {
    // 发饼干
    let j = 0;
    while (j < s.length) {
      if (s[j] >= g[i]) {
        s.splice(j, 1); // 消耗掉一块饼干
        child++;
        break;
      } else {
        // 不能满足该小孩胃口的前面的小饼干，对于后边大胃口的小孩也是不能满足的，需要丢掉
        s.splice(j, 1); // 丢掉这块饼干
      }
      j++;
    }
    i++;
  }
  return child;
};
