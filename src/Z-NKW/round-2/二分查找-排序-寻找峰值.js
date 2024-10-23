/**
 * 寻找峰值【中等】
 * // https://www.nowcoder.com/practice/fcf87540c4f347bcb4cf720b5b350c76?tpId=295&tqId=2227748&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function findPeakElement(nums) {
  if (nums.length === 1) {
    return 0;
  }
  if (nums.length === 2) {
    const [ele1, ele2] = nums;
    return ele1 > ele2 ? 0 : 1;
  }
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    const pre = getEle(nums, i - 1);
    const cur = nums[i];
    const next = getEle(nums, i + 1);
    if (pre < cur && cur > next) {
      pos = i;
      break;
    }
  }
  return pos;
}

function getEle(nums, i) {
  if (i < 0 || i >= nums.length) {
    return -Infinity;
  } else {
    return nums[i];
  }
}

module.exports = {
  findPeakElement: findPeakElement,
};
