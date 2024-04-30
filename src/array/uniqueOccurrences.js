// https://leetcode-cn.com/problems/unique-number-of-occurrences
/**
给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

示例 1：
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。

示例 2：
输入：arr = [1,2]
输出：false

示例 3：
输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true

提示：
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  if (arr.length === 1) {
    return true;
  }
  // 用一个map记录每个数字出现的次数，key = n, value = count
  let map = Object.create(null);
  arr.forEach(v => {
    let c = map[v];
    if (c === undefined) {
      c = 1;
    } else {
      c += 1;
    }
    map[v] = c; // update
  });
  // 遍历这个 map，看看是不是每个key对应的v都是独一无二的
  let isUnique = true;
  let tmp = [];
  for (const [v, c] of Object.entries(map)) {
    if (!tmp.includes(c)) {
      tmp.push(c);
    } else {
      isUnique = false;
      break;
    }
  }
  return isUnique;
};
