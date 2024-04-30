// https://leetcode-cn.com/problems/increasing-order-search-tree
/**
递增顺序查找树

给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。

示例 ：

输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
 

提示：

给定树中的结点数介于 1 和 100 之间。
每个结点都有一个从 0 到 1000 范围内的唯一整数值。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  if (!root) {
    return null;
  }
  // 分析，中序遍历即可
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
    let { val, left, right } = root;
    let res = [];
    left && res.push(...inorderTraversal(left));
    res.push(val); // 中序遍历是最后才加根节点
    right && res.push(...inorderTraversal(right));
    return res;
  }
  let list = inorderTraversal(root);
  // console.log(list);
  let firstNode = null,
    tmpNode = null,
    preNode = null;
  for (let v of list) {
    tmpNode = new TreeNode(v, null, null);
    if (preNode == null) {
      preNode = tmpNode;
      firstNode = preNode;
    } else {
      preNode.right = tmpNode;
      preNode = tmpNode;
    }
  }
  return firstNode;
};
