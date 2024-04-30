// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
/**
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

限制：
1 <= target <= 10^5
*/
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 等差数列的前n项和 Sn = n*(a1+an)/2, 从而找到 Sn <= target 时候 n 的值， n(1+n)/2 <= target
  let res = [];
  for (let i = 1; i + i + 1 <= target; i++) {
    let sum = i;
    let tmp = [i];
    // 让每一个数都去做尝试，从自己开始做累加，能否有连续序列能够加出target来
    for (let j = i + 1; i + j <= target; j++) {
      sum += j;
      if (sum === target) {
        tmp.push(j);
        res.push(tmp);
      } else if (sum < target) {
        tmp.push(j);
      } else {
        break;
      }
    }
  }
  return res;
};
