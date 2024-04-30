// https://leetcode-cn.com/problems/sort-array-by-parity
// 类似题，但不完全一样 https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
/**
按奇偶排序数组

给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

示例：

输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 

提示：

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let stackOdd = []; // 奇数栈
  let stackEven = []; // 偶数栈
  for (let a of A) {
    if (a % 2 == 0) {
      stackEven.push(a);
    } else {
      stackOdd.push(a);
    }
  }
  return [...stackEven, ...stackOdd]; // 或 stackEven.concat(stackOdd)
};
