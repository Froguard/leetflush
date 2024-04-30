// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
/**
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

【特别注意】，这里每一层会交替出现正序和倒序！！！
i = 0 -> n-1
第 i 层 i % 2 == 0, 为正序，否则为倒序

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
  [20,9],
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
    // next depth
    left && putIn(left, arr, depth + 1);
    right && putIn(right, arr, depth + 1);
  }
  let res = [];
  putIn(root, res, 0);
  // 在层序遍历基础之上，实现正反序效果
  res.forEach((r, i) => {
    if (i % 2 != 0) {
      r.reverse(); // reverse 函数会实际的改变数组r内部的排序！
    }
    return r;
  });
  return res;
};
