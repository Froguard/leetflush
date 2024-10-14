// https://leetcode-cn.com/problems/balanced-binary-tree
// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof
// https://leetcode-cn.com/problems/check-balance-lcci/
/**
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：true

示例 2：
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false

示例 3：
输入：root = []
输出：true
 
提示：
树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { TreeNode, createBinaryTreeNodeByArr } = require('./com/TreeNode');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let cached = new WeakMap();
var isBalanced = function (root) {
  // 计算某个点的高度
  function calcDepth(root, depth = 0) {
    if (!root) {
      return depth;
    }
    depth += 1;
    let { left, right } = root;
    return Math.max(calcDepth(left, depth), calcDepth(right, depth));
  }
  // 获取某个点的高度：优先从缓存里取，没有的话再调用 calcDepth 计算
  function getDepth(node) {
    if (!node) {
      return 0;
    }
    let cache = cached.get(node);
    if (cache) {
      return cache;
    }
    cache = calcDepth(node, 0);
    cached.set(node, cache);
    return cache;
  }

  // 递归检查每一个节点是否为平衡节点：
  // 特别注意，这里并不能拆分成判断左子树和柚子树是否都为平衡树，因为左右都平衡之后，也有可能左右的高度差是超过1的
  // 所以只能老实的检查每一个节点的左右子节点的高度差
  let stop = false;
  function checkBalance(node) {
    if (stop) {
      return;
    }
    if (!node) {
      return;
    }
    let isBlc = false;
    let { left, right } = node;
    if (!left && !right) {
      isBlc = true;
    } else {
      isBlc = Math.abs(getDepth(left) - getDepth(right)) <= 1;
    }

    if (!isBlc) {
      stop = true;
    } else {
      left && checkBalance(left);
      right && checkBalance(right);
    }
  }
  checkBalance(root);
  return !stop;
};

console.log(isBalanced(createBinaryTreeNodeByArr([3, 9, 20, null, null, 15, 7]))); // true
console.log(isBalanced(createBinaryTreeNodeByArr([1, 2, 2, 3, 3, null, null, 4, 4]))); // false
console.log(isBalanced(createBinaryTreeNodeByArr([]))); // true
console.log(isBalanced(createBinaryTreeNodeByArr([1, 2]))); // true
