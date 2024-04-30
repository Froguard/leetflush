// https://leetcode-cn.com/problems/group-anagrams
/**
49. 字母异位词分组

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 1) {
    return [strs];
  }
  let res = [];
  let unquie = new Map();
  for (let str of strs) {
    let cs = str.split('');
    cs.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let key = cs.join('');
    let value = unquie.get(key);
    if (value === undefined) {
      value = [];
    }
    value.push(str);
    unquie.set(key, value);
  }
  // console.log(unquie);
  for (let v of unquie.values()) {
    res.push(v);
  }
  return res;
};
