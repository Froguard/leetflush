// https://leetcode-cn.com/problems/diving-board-lcci
/**
你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

返回的长度需要从小到大排列。

示例 1

输入：
shorter = 1
longer = 2
k = 3
输出： [3,4,5,6]
解释：
可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。

提示：
0 < shorter <= longer
0 <= k <= 100000
*/
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) {
    // 没有模板
    return [];
  }
  if (shorter === longer) {
    // 长短木板长度一致
    return [shorter * k];
  }
  let res = [
    shorter * k, // 默认最小值
  ];
  for (let i = k - 1; i >= 1; i--) {
    let j = k - i;
    // 方法一
    // pushIntoRes(res, i * shorter + longer * j);

    // 方法二，根据 i 递减，j 递增，会是的插入值 (i * shorter + longer * j) 越来越大，方法一可以简化为如下
    let t = i * shorter + longer * j;
    res[res.length - 1] < t && res.push(t);
  }
  pushIntoRes(res, longer * k);
  return res;
};

// 使用插入排序的方式进行插入，如果插入值的规律是越来越大，则性能最优
function pushIntoRes(res, target) {
  // 当每一次插入的值，规律为越来越大的时候，会持续命中分支，而无需下面的一系列了逻辑判断，算法最优
  if (res.length == 0 || target > res[res.length - 1]) {
    // 数组为零，或者目标大于数组最后一个元素时，直接追加
    res.push(target);
    return;
  }
  // 正常情况下，下面逻辑不会命中
  let inserted = false;
  for (let i = res.length - 1; i >= 0; i--) {
    if (target === res[i]) {
      // 避免重复插入，并结束循环
      inserted = true;
      break;
    }
    if (target > res[i]) {
      res.splice(i, 0, target); // 找到合适位置之后插入，并结束循环
      inserted = true;
      break;
    }
  }
  if (!inserted) {
    res.push(target);
  }
}
