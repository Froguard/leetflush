// https://leetcode-cn.com/problems/reverse-bits-lcci/
/**
给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。

示例 1：
输入: num = 1775(110111011112)
输出: 8

示例 2：
输入: num = 7(01112)
输出: 4
*/
/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  // 虽然名字相同，但是本题和 ./reverseBits.js 这道题没有半毛钱关系
  let bits = [];
  let i = 0;
  while (i < 32) {
    let b = num & (1 << (32 - 1 - i));
    b = b === 0 ? 0 : 1;
    bits.push(b);
    i++;
  }
  while (bits[0] == 0 && bits.length > 1) {
    bits.shift();
  }
  // console.log(bits);
  let onesArr = bits.join('').split('0');
  // console.log(onesArr);
  let res = 0;
  if (onesArr.length === 0) {
    res = 1;
  } else if (onesArr.length === 1) {
    res = onesArr[0].length === 32 ? 32 : onesArr[0].length + 1;
  } else {
    let max = 0,
      lenSum = 0;
    for (let j = 0; j < onesArr.length - 1; j++) {
      lenSum = onesArr[j].length + onesArr[j + 1].length;
      max = Math.max(max, lenSum);
    }
    res = max + 1;
  }
  return Math.min(res, 32);
};

console.log(reverseBits(-1)); // 32
