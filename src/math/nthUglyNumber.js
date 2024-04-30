// https://leetcode-cn.com/problems/ugly-number-ii
// https://leetcode-cn.com/problems/chou-shu-lcof/
/**
【重点题】第 N 个 丑数！
丑数就是质因数只包含 2, 3, 5 的正整数。

示例:
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

说明:  
1 是丑数。
n 不超过1690。
*/
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 方法一，空间换时间，但是会超时，因为题设为 1690 非常大
 * 即：将每次计算出来的丑数，都用数组 uglyNums 进行存储起来，则对应的解，第 n 个丑数则是 uglyNums[n-1]
 */
/*
let uglyNums = [];
var nthUglyNumber = function(n) {
    if (n > uglyNums.length) {
        if (uglyNums.length === 0) {
            for (let i = 0, count = 0; count <= n; i++) {
                if (isUgly(i)) {
                    uglyNums.push(i);
                    count++;
                }
            }
        } else {
            let curUglySize = uglyNums.length;
            let curLastUgly = uglyNums[curUglySize-1];
            for (let i = curLastUgly + 1, count = curUglySize; count <= n; i++)  {
                if (isUgly(i)) {
                    uglyNums.push(i);
                    count++;
                }
            }
        }
    }
    return uglyNums[n-1];
};
function isUgly(n) {
    // 对能被2,3,5整除的数不断除2,3,5，最后剩1就是，剩0就不是
    if (n == 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    while (n % 5 == 0) {
        n /= 5;
    }
    while (n % 3 == 0) {
        n /= 3;
    }
    while (n % 2 == 0) {
        n /= 2;
    }
    return n == 1;
};
*/

/**
 * 方法二，提升uglyNums的创建效率！
 *  主动的去构建出 uglyNums 这个数组来，且构建方式不是自然判断某个数是否为丑数
 *  而是，通过递归形式，利用三指针(pointer2, pointer3, pointer5)方法，把每一个 uglyNums[i] 算出来
 *
 *  这里的核心是，要能够用数学原理推导出来，“丑数规律” uglyNums[i] = Min{ uglyNums[ptr2]*2, uglyNums[ptr3]*3, uglyNums[ptr5]*5 } // 三个结果取最小值
 *
 */
let uglyNums = [1]; // 前五个丑数是可以算出来的
let ptr2 = 0;
let ptr3 = 0;
let ptr5 = 0;
var nthUglyNumber = function (n) {
  if (n > uglyNums.length) {
    for (let i = uglyNums.length; i < n; i++) {
      uglyNums[i] = getMin(uglyNums[ptr2] * 2, uglyNums[ptr3] * 3, uglyNums[ptr5] * 5); // 三数最小值
      // 命中时，指针需要向后移动
      if (uglyNums[i] == uglyNums[ptr2] * 2) ptr2++;
      if (uglyNums[i] == uglyNums[ptr3] * 3) ptr3++;
      if (uglyNums[i] == uglyNums[ptr5] * 5) ptr5++;
    }
  }
  return uglyNums[n - 1];
};
// 获取三者中的最小值
function getMin(a, b, c) {
  return Math.min(a, Math.min(b, c));
}
