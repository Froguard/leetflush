/**
 * 滑动窗口的最大值【困难】
 * // https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788?tpId=295&tqId=23458&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * //
 * // https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 * // https://leetcode.cn/problems/sliding-window-maximum/description/
 */

// 很侥幸，在牛客网，测试用例都比较小，这道题可以使用暴力求解，并且不超时
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @param size int整型
 * @return int整型一维数组
 */
function maxInWindows(nums, size) {
  // 方法1，暴力破解法，在遇到数据量大的时候，会有超时的风险，但本题的数组长度在10000以内，还算好
  if (size === 0 || !nums.length) {
    return [];
  }
  //
  function getMax(arr) {
    return arr.reduce((acc, n) => {
      return Math.max(acc, n);
    }, arr[0]);
  }
  if (nums.length == size) {
    return [getMax(nums)];
  }
  let res = [];
  let window = null;
  for (let i = 0; i <= nums.length - size; i++) {
    window = nums.slice(i, i + size);
    let max = getMax(window);
    res.push(max);
  }
  return res;
  // 方法2：使用单调队列解决，应对超长数组
}
module.exports = {
  maxInWindows: maxInWindows,
};
