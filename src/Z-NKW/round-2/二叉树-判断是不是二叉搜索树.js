/**
 * 判断是不是二叉搜索树【中等】
 * // https://www.nowcoder.com/practice/a69242b39baf45dea217815c7dedb52b?tpId=295&tqId=2288088&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/validate-binary-search-tree
 */

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */
function isValidBST(root) {
  /**
   * 【核心思想】BST 的中序遍历，是一个严格递增的数组，判断一下即可
   * 判断一棵树的中序遍历是否为一个严格递增数组，既可以判断是否为BST（二叉搜索树）
   */
  let res = [];
  function inOrder(node) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    left && inOrder(left);
    // 可以优化的点：
    // 在 res.push 时，查看末尾元素和待加入元素，是否为递增关系，如果不是，则直接判定为失败
    res.push(val);
    right && inOrder(right);
  }
  inOrder(root);
  // console.log(res);

  let isValid = true;
  for (let i = 0; i < res.length; i++) {
    if (res[i - 1] >= res[i]) {
      isValid = false;
      break;
    }
  }
  return isValid;
}
module.exports = {
  isValidBST: isValidBST,
};
