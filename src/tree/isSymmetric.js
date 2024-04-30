// https://leetcode-cn.com/problems/symmetric-tree
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
/*
对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

进阶：
你可以运用递归和迭代两种方法解决这个问题吗？
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
var isSymmetric = function (root) {
  // 方法1：
  function isEqual(p, q) {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return p.val == q.val && isEqual(p.left, q.left) && isEqual(p.right, q.rignt);
  }
  return root ? isEqual(root.left, root.right) : true;

  // 方法2： 笨方法：将树转化为二维数组
  /**
    //      1         [
    //     / \           [1],
    //    2   2   =>     [2,2],
    //   / \ / \         [3,4,4,3]
    //  3  4 4  3     ]
     */
  function arraiefy(treeNode) {
    let res = [];
    function putIn(root, arr, depth) {
      arr[depth] = arr[depth] && arr[depth].length ? arr[depth] : [];
      if (root === null) {
        arr[depth].push(null);
        return;
      } else {
        let { val, left, right } = root;
        arr[depth].push(val);
        putIn(left, arr, depth + 1);
        putIn(right, arr, depth + 1);
      }
    }
    putIn(treeNode, res, 0);
    res.pop(); // 删除最后一个元素，该元素为一个“包含了 2^depth 个 null 的数组”
    return res;
  }
  // 检查上述二维数组中的每一个成员（数组元素）是否为回文元素
  function checkSymmetric(row) {
    if (row.length === 1) {
      return true;
    }
    row = row.map(r => (r === null ? 'N' : r));
    let reverseRow = [...row].reverse();
    // console.log(row, reverseRow);
    return row.join('') == reverseRow.join('');
  }
  //
  //   let treeArr = arraiefy(root);
  //   // console.log(treeArr);
  //   return treeArr.every(row => checkSymmetric(row));
};

// console.log(isSymmetric(createBinaryTreeNodeByArr([1,2]))); // false
console.log(isSymmetric(createBinaryTreeNodeByArr([1, 0]))); // false
// console.log(isSymmetric(createBinaryTreeNodeByArr([1,2,2,3,4,4,3]))); // true
// console.log(isSymmetric(createBinaryTreeNodeByArr([1,2,2,null,3,null,3]))); // false
