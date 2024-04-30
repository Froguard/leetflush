// https://leetcode-cn.com/problems/merge-intervals
/**
合并区间，合并多个区间

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 
提示：
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]); // 先排序

  let res = [];
  // 插入过程中对已插入的取件进行合并处理
  function pushToRes(mg) {
    let [s, e] = mg;
    if (res.length == 0) {
      res.push(mg);
    } else {
      // 尽可能优先合并，无法合并的时候再选择加入
      let pushed = false;
      for (let i = 0; i < res.length; i++) {
        let r = res[i];
        let mgNew = mergeRange(r[0], r[1], s, e);
        if (mgNew) {
          res[i] = mgNew;
          pushed = true;
        }
      }
      !pushed && res.push(mg);
    }
  }
  for (let itv of intervals) {
    pushToRes(itv);
  }

  return res;
};

function mergeRange(start1, end1, start2, end2) {
  if (end1 < start2) {
    // 不相交
    return false;
  }
  // if (start1 == start2 && end1 == end2) {// 相等
  //     return [start1, end1];
  // }
  if (start1 <= start2 && start2 <= end1 && end1 <= end2) {
    // 相交（包含相等）
    return [start1, end2];
  }
  if (start1 <= start2 && end1 >= end2) {
    // 1 包含 2
    return [start1, end1];
  }
  if (start1 >= start2 && end1 <= end2) {
    // 2 包含 1
    return [start2, end2];
  }
}
