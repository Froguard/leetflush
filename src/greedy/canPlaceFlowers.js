// https://leetcode-cn.com/problems/can-place-flowers
/**
假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

示例 1：
输入：flowerbed = [1,0,0,0,1], n = 1
输出：true

示例 2：
输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
 
提示：
1 <= flowerbed.length <= 2 * 104
flowerbed[i] 为 0 或 1
flowerbed 中不存在相邻的两朵花
0 <= n <= flowerbed.length
*/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let notAllows = []; // 将不能种花的位置都先标出来，即：第i位能不能种花看notAllows[i]的值：=1不能种，=0能种
  let count = 0;
  let tmp = 0; // 计算连续0的个数
  for (let i = 0; i < flowerbed.length; i++) {
    // 本位如果种了花，则不能种花
    notAllows[i] = flowerbed[i];
    if (notAllows[i] == 0) {
      // 相邻有花的（前面或者后面有花），则本位不能种花
      if (i > 0 && flowerbed[i - 1] == 1) {
        notAllows[i] = 1;
      }
      if (i < flowerbed.length - 1 && flowerbed[i + 1] == 1) {
        notAllows[i] = 1;
      }
    }
    if (notAllows[i] == 0) {
      tmp++;
    } else {
      if (tmp > 0) {
        count += Math.ceil(tmp / 2);
        tmp = 0;
      }
    }
  }
  // 末尾结束之后需要再判定以便，以便处理最后一位是0的情况
  if (tmp > 0) {
    count += Math.ceil(tmp / 2);
    tmp = 0;
  }
  // console.log(notAllows);
  // console.log(count);
  return count >= n;
};
