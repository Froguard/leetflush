// https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof/?company_slug=spdb
// 类似题：https://leetcode.cn/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-100-liked
/**
LCR 191. 按规则计算统计结果

为了深入了解这些生物群体的生态特征，你们进行了大量的实地观察和数据采集。数组 arrayA 记录了各个生物群体数量数据，其中 arrayA[i] 表示第 i 个生物群体的数量。请返回一个数组 arrayB，该数组为基于数组 arrayA 中的数据计算得出的结果，其中 arrayB[i] 表示将第 i 个生物群体的数量从总体中排除后的其他数量的乘积。

示例 1：
输入：arrayA = [2, 4, 6, 8, 10]
输出：[1920, 960, 640, 480, 384]

s提示：
所有元素乘积之和不会溢出 32 位整数
arrayA.length <= 100000
*/
/**
 * @param {number[]} arrayA
 * @return {number[]}
 */
var statisticalResult = function (arrayA) {
  let m = 1;
  const zeroPosList = [];
  for (let i = 0; i < arrayA.length; i++) {
    const a = arrayA[i];
    if (zeroPosList.length >= 2) {
      m = 0;
      break;
    }
    if (a === 0) {
      zeroPosList.push(i);
      continue;
    } else {
      m *= a;
    }
  }
  const hasZero = zeroPosList.length > 0;
  const isMultiZero = zeroPosList.length > 1;

  return arrayA.map((a, i) => {
    if (a === 0) {
      return isMultiZero ? 0 : m;
    } else {
      return hasZero ? 0 : m / a;
    }
  });
};
