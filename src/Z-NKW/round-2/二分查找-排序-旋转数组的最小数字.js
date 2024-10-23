/**
 * 旋转数组的最小数字【简单】
 * // https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=295&tqId=23269&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function minNumberInRotateArray(nums) {
  // 方法1：简单粗暴的直接找最小值
  // return Math.min(...nums);
  // 方法2：循环查找，因为数组是波动递增的（ 即：[↗↘↗] ），所以找到转折的波底，就是最小值
  let min = nums[0];
  if (nums.length === 1) {
    return min;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) {
      continue;
    } else {
      min = Math.min(min, nums[i]);
      break;
    }
  }
  return min;
}
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray,
};
