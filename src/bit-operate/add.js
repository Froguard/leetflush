// https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
/**
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

示例:

输入: a = 1, b = 1
输出: 2
 
提示：

a, b 均可能是负数或 0
结果不会溢出 32 位整数
*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 方法一，作弊了
  // return a + b;
  // 方法二，位运算，位异或
  if (a == 0) {
    return b;
  }
  if (b == 0) {
    return a;
  }
  let bitsA = num2Bits(a, a < 0);
  let bitsB = num2Bits(b, b < 0);
  let i = 31;
  let c = 0;
  let bitsRes = [];
  while (i >= 0) {
    let ba = bitsA[i];
    let bb = bitsB[i];
    let sum = ba ^ bb ^ c;
    bitsRes.unshift(sum);
    c = c == 0 ? ba & bb : ba | bb;
    i--;
  }
  // console.log(bitsA.join(''));
  // console.log(bitsB.join(''))
  // console.log(bitsRes.join(''));
  return bits2num(bitsRes);
};

function bits2num(bits) {
  let num = 0;
  let i = 0;
  while (i < 32) {
    // 从高位开始，逐位设置1
    if (bits[i] === 1) {
      num = num | (1 << (32 - 1 - i)); // 有符号位时
    }
    i++;
  }
  return num;
}
function num2Bits(num, useComplement = false) {
  let bits = [];
  let i = 0;
  while (i < 32) {
    let b;
    if (useComplement) {
      b = num & (1 << i);
    } else {
      if (i == 31) {
        b = num > 0 ? 0 : 1; // 正数符号位为0，负数符号位为1
      } else {
        b = Math.abs(num) & (1 << i);
      }
    }

    bits.unshift(b ? 1 : 0);
    i++;
  }
  return bits;
}
