// https://leetcode-cn.com/problems/happy-number
/**
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 true ；不是，则返回 false 。
 

示例 1：
输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

示例 2：
输入：n = 2
输出：false
 
提示：
1 <= n <= 231 - 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 这个题的核心问题在于“如何判断是否是无限循环”，挖重点，判断循环即可
  // 我们用一个数组dealt，记录每次操作计算之后的结果，当发现结果已经开始重复时，停止即可

  // 求一个数组的各位数上的平方和
  function sumOfSquares(n) {
    const len = ('' + n).length;
    let sum = 0,
      t = 0;
    for (let i = 1; i <= len; i++) {
      t = parseInt(n / Math.pow(10, i)) % 10;
      // console.log('t', t);
      sum += Math.pow(t, 2); // t*t
    }
    sum += Math.pow(n % 10, 2);
    return sum;
  }
  let dealt = [];
  while (!dealt.includes(n) && n != 1) {
    dealt.push(n); // 添加需要在计算之前添加，表示已经处理过
    n = sumOfSquares(n);
  }
  // console.log(dealt);
  return n === 1;
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
