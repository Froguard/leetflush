/**
 * 二分查找-I
 * // https://www.nowcoder.com/practice/d3df40bd23594118b57554129cadf47b?tpId=295&tqId=1499549&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // 方法一：直接 indexOf, 也能 AC
  // return nums.indexOf(target);

  // 方法二：老老实实用二分查找去做
  if (nums.length === 0) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  function _find(nums, target, left, right) {
    const pos = left + Math.floor((right - left) / 2);
    // console.log(pos, `[${left},${right}]`, `dis=${Math.floor((right - left) / 2)}`);
    const cur = nums[pos];
    if (target === cur) {
      return pos;
    } else {
      if (left === right || right - left === 1) {
        return -1;
      }
      if (target > cur) {
        return _find(nums, target, pos, right);
      } else {
        return _find(nums, target, left, pos);
      }
    }
  }

  //
  return _find(nums, target, 0, nums.length);
}
module.exports = {
  search: search,
};
