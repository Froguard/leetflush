//

/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return '';
  } else if (strs.length === 1) {
    return strs[0];
  } else {
    strs.sort((a, b) => a.length - b.length); // 排序找到最短元素，然后以最短元素去比较后边的元素
    let res = [];
    let firstCs = strs[0].split('');
    for (let i = 0; i < firstCs.length; i++) {
      let fc = firstCs[i];
      let matched = true;
      for (let j = 1; j < strs.length; j++) {
        let otherCs = strs[j].split('');
        let oc = otherCs[i];
        if (fc !== oc) {
          matched = false;
          break;
        }
      }
      if (matched) {
        res.push(fc);
      } else {
        break;
      }
    }
    return res.join('');
  }
};

console.log(longestCommonPrefix(['flow', 'flower', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
