// https://leetcode-cn.com/problems/check-if-it-is-a-straight-line
/**
缀点成线
在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。
 
示例 1：
输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
输出：true

示例 2：
输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
输出：false
 
提示：
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates 中不含重复的点
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // 分析，从第二个点开始，判断斜率是否一致即可
  if (coordinates.length <= 2) {
    return true;
  }
  function getK(p0, p1) {
    if (p1[0] === p0[0]) {
      return Infinity;
    }
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  let p0 = coordinates[0],
    p1 = coordinates[1];
  const k = getK(p0, p1);
  let ki, i;
  for (i = 2; i < coordinates.length; i++) {
    ki = getK(p0, coordinates[i]);
    if (ki != k) {
      return false;
      // break;
    }
  }
  return i == coordinates.length;
};

// console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // true
// console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // false
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [2, 0],
  ]),
); // false
