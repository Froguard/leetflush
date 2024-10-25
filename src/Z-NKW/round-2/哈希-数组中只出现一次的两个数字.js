/**
 * 数组中只出现一次的两个数字
 * // https://www.nowcoder.com/practice/389fc1c3d3be4479a154f63f495abff8?tpId=295&tqId=1375231&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型一维数组
 */
function FindNumsAppearOnce(nums) {
  const res = new Set();
  const checked = new Set();
  for (const n of nums) {
    if (checked.has(n)) {
      res.delete(n);
    } else {
      checked.add(n);
      res.add(n);
    }
  }
  checked.clear();
  const arr = [...res];
  arr.sort((a, b) => a - b);
  return arr;
}

module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce,
};
