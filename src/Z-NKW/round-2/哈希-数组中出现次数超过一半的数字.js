/**
 * 数组中出现次数超过一半的数字
 * // https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163?tpId=295&tqId=23271&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型
 */
function MoreThanHalfNum_Solution(numbers) {
  const LEN = numbers.length;
  const HALF_LEN = Math.ceil(LEN / 2);
  const map = new Map();
  let res = 0;
  for (const n of numbers) {
    const c = map.get(n) || 0;
    const cNew = c + 1;
    map.set(n, cNew);
    if (cNew >= HALF_LEN) {
      res = n;
      break;
    }
  }
  // map.clear();
  // map = null;
  return res;
}

module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
