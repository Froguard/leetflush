// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
/**
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
 
提示：
节点总数 <= 1000

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode, createBinaryTreeNodeByArr } = require('./com/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  function putIn(root, arr, depth) {
    if (root === null) {
      return;
    }
    let { val, left, right } = root;
    arr[depth] = arr[depth] && arr[depth].length ? arr[depth] : [];
    arr[depth].push(val);
    if (left !== null) {
      putIn(left, arr, depth + 1);
    }
    if (right !== null) {
      putIn(right, arr, depth + 1);
    }
  }
  let res = [];
  putIn(root, res, 0);
  return res;
};

let root = createBinaryTreeNodeByArr([3, 9, 20, null, null, 15, 7]);
console.log(root);
console.log(levelOrder(root));
/**
[
  [3],
  [9,20],
  [15,7]
]
*/
