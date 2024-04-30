// https://leetcode.cn/problems/max-points-on-a-line/description/
/**
给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。

示例 1：
输入：points = [[1,1],[2,2],[3,3]]
输出：3

示例 2：
输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出：4

提示：
1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
points 中的所有点 互不相同
*/

/**
 * 求取点数组中，在一条直线上的点最大数量
 * 中心思想：
 * 1.循环遍历每个点，依次让其与之后的点相连成线，求出线的斜率，当斜率相同，则说明在同一条线上，此时做一次记录
 * 2.每轮循环中，求出目标点与其之后点组成线的斜率，斜率相同做记录，此时可以发现，经过改点的所有线的斜率抖求出来了
 *   - 同时，经过改点的所有线上的点，为斜率出现次数 + 1 （要加上自己也是点）
 *   - 此时，找出出现频率最高的那条线即可
 * 3.循环中求出了穿过这个点的线中，包含最多点的那条
 * 4.每轮循环抖比较下，求出所有循环下来中，最大的值即可
 * @param {number[][]} points
 * @return {number}
 * @example
 * maxPoints([[1,1],[2,2],[3,3]]); // 2
 * maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]); // 3
 */
var maxPoints = function (points) {
  const len = points.length;
  if (len < 3) {
    return len;
  }
  let maxCount = 0;
  for (let i = 0; i < len; i++) {
    // 剪枝操作：
    // 1.如果最大结果已经比一半的点都大，那不用再试了
    // 2.如果剩下的点的数量比当前 maxCount 还小，那及时遍历完也不可能出现比它更大的了，不用再试
    if (maxCount > len / 2 || maxCount >= len - i) {
      // return maxCount;
      break;
    }
    const pt1 = points[i];
    const lineKs = new Map();
    for (let j = i + 1; j < len; j++) {
      const pt2 = points[j];
      const k = getSlope(pt1, pt2);
      if (lineKs.has(k)) {
        lineKs.set(k, lineKs.get(k) + 1);
      } else {
        lineKs.set(k, 1);
      }
      const maxOccur = Math.max(...lineKs.values());
      maxCount = Math.max(maxCount, maxOccur + 1);
    }
  }
  return maxCount;
};

/**
 * 求取两点组成的线的斜率
 * 注意：一些特殊 case 需要特殊处理
 * - 1、平行于 Y 轴的线，其斜率为无穷大，即 +Infinity
 * - 2、平行于 X 轴的线，其斜率为 0
 * 其他：
 * - 1、不会出现 p1 和 p2 想通的 case （因为题目中已经假设了所有点都不相同，而且两个相同的点也没办法组成线）
 * - 2、返回的不是斜率这个数字，而是斜率的字符串表示
 * @param {[number, number]} p1
 * @param {[number, number]} p2
 * @returns {string} k 斜率的字符串表达
 * 这里之所以不返回数字，是担心计算机处理除操作，会丢失精度
 * @example
 * getSlope([1,2],[2,3]); // '1/1'
 * console.log(getSlope([1,2],[2,-3]); // '-5/1'
 * getSlope([1,0],[2,0]); // '0'
 * getSlope([0,1],[0,5]); // 'Infinity'
 * getSlope([0,0],[0,0]); // 'Exception'
 */
function getSlope(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const diffX = x1 - x2;
  const diffY = y1 - y2;
  if (diffX === 0 && diffY === 0) {
    return 'Exception'; // 异常，即 p1 和 p2 是同一个点，而单个点没办法组成线，也就没有斜率这一说
  }
  if (diffX === 0) {
    return 'Infinity';
  }
  if (diffY === 0) {
    return '0';
  }
  const gcdXY = getGreatestCommonDivisor(diffX, diffY);
  const n = diffY / gcdXY;
  const m = diffX / gcdXY;
  // 将符号前置到最前面
  let sign = '';
  if ((n > 0 && m < 0) || (n < 0 && m > 0)) {
    sign = '-';
  }
  return `${sign}${Math.abs(n)}/${Math.abs(m)}`;
}

/**
 * 求取数字 a 和 b 的最大公约数
 * @param {number} a
 * @param {number} b
 * @return {number} gcd
 * @example
 * getGreatestCommonDivisor(1,2); // 1
 * getGreatestCommonDivisor(3,4); // 1
 * getGreatestCommonDivisor(2,4); // 2
 * getGreatestCommonDivisor(50,100); // 50
 */
function getGreatestCommonDivisor(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    const tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}
