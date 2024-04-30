// https://leetcode-cn.com/problems/single-number/

/**
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 方法1，额外空间法
  /*
    let tmp = {};
    nums.forEach(n => {
        if (!tmp[n]) {
            tmp[n] = 1;
        } else {
            delete tmp[n];
        }
    });
    return parseInt(Object.keys(tmp)[0]);
    */

  // 方法二：使用异或操作符
  /*
    // - 交换律：a ^ b ^ c <=> a ^ c ^ b
    // - 任何数于0异或为任何数 0 ^ n => n
    // - 相同的数异或为0: n ^ n => 0
    // 则会有 a^a^X^b^c^b^c^d^e^c^e = a^a^b^b^c^c^d^d^e^e^X = 0^0^0^0^0^X = 0^X
    */
  return nums.reduce((acc, cur) => acc ^ cur, 0);
  /*
    // 等价于如下
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        a ^= nums[i];
    }
    return a;
    */
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
