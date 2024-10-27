/**
 * 最小的k个数
 * // https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf?tpId=295&tqId=23263&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // 类似的，找最大的k个数 // https://leetcode-cn.com/problems/kth-largest-element-in-an-array
 */
/**
 * @param {Array<number>} input int 数组
 * @param {number} k int 数字
 * @return {Array<number>} int 数组
 */
function GetLeastNumbers_Solution(input, k) {
  // 方法1，直接sort
  // input.sort((a,b) => (a-b));
  // return input.slice(0, k);

  // 方法2：基于冒泡排序改进下，当已经排好前k个元素时，则终止循环。即，循环的右边界可以直接是k
  for (let i = 0; i < k; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] > input[j]) {
        // swap
        const tmp = input[i];
        input[i] = input[j];
        input[j] = tmp;
      }
    }
  }
  return input.slice(0, k);
  // 比较遗憾，大部分情况下，【方法2】 虽然比【方法1】 快，但快得不够明显
}

module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
