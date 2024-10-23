/**
 * 判断是不是平衡二叉树【简单】
 * // https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222?tpId=295&tqId=23250&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E9%259D%25A2%25E8%25AF%2595%26topicId%3D295
 * // https://leetcode-cn.com/problems/balanced-binary-tree
 * // https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof
 * // https://leetcode-cn.com/problems/check-balance-lcci/
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
 * @param pRoot TreeNode类
 * @return bool布尔型
 */
function IsBalanced_Solution(pRoot) {
  // 递归检查每一个节点是否为平衡节点：
  // 特别注意，这里并不能拆分成判断左子树和柚子树是否都为平衡树，因为左右都平衡之后，也有可能左右的高度差是超过1的
  // 所以只能老实的检查每一个节点的左右子节点的高度差
  let stop = false;
  function checkBalance(node) {
    if (stop || !node) {
      return;
    }

    let isBlc = false;
    let { left, right } = node;
    if (!left && !right) {
      isBlc = true;
    } else {
      isBlc = Math.abs(calcDepth(left) - calcDepth(right)) <= 1;
    }

    if (!isBlc) {
      stop = true;
    } else {
      left && checkBalance(left);
      right && checkBalance(right);
    }
  }

  checkBalance(pRoot);
  return !stop;
}

// 计算某个点的高度
function calcDepth(root, depth = 0) {
  if (!root) {
    return depth;
  }
  depth += 1;
  let { left, right } = root;
  return Math.max(calcDepth(left, depth), calcDepth(right, depth));
}

module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
};
