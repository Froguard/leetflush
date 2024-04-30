// https://leetcode-cn.com/problems/factorial-trailing-zeroes
/**
给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。

示例 2:
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // TODO: 记下来，考察重点！！！
  // 方法一：【最优解】 只要先找个一个5的x次方即 5^x < n 的x的最大数 然后按上面循环加起来
  let count = 0;
  while (n >= 5) {
    count += parseInt(n / 5);
    n /= 5;
  }
  return count;

  // 方法二：因为之后2*5才会在末尾产生0，所以将每个乘数进行拆解，数一下阶乘中，乘数里出现的2的次数(包括2的倍数可以被拆解的,如4可以拆分成2*2，6可以拆分成2*3)
  // 事实上，其实只需要求count5即可，因为count2的次数绝对会比count5多！！！，因为5是每经过5位数出现1次，而2的话，基本上只要是偶数，一定会出现一次，即，每两次出现一次
  // let count2 = 0;
  // let count5 = 0;
  // for (let i = 1; i <= n; i++) {
  //     if (i % 5 === 0) {
  //         count5 += getCount(i, 5);
  //     }
  //     if (i % 2 === 0) {
  //         count2 += getCount(i, 2);
  //     }
  // }
  // function getCount(x, t) {
  //     let c = 0;
  //     while (x % t === 0) {
  //         c += 1;
  //         x /= t;
  //     }
  //     return c;
  // }
  // return Math.min(count5, count2);

  // 方法三：暴力法，但是会出现溢出的问题
  // let t = 1;
  // for(let i = 1; i <= n; i++) {
  //     t *= i;
  // }
  // // console.log(t, t % 10);
  // let count = 0;
  // while (t % 10 == 0) {
  //     count++;
  //     t /= 10;
  // }
  // return count;
};
