// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
/**
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const LEN = postorder.length; // inorder.length
  if (LEN == 0) {
    return null;
  }
  // 前序/后序+中序序列可以唯一确定一棵二叉树，所以自然而然可以用来建树
  function getPosI(v) {
    return getPos(v, inorder);
  }
  /**
   * 前序：根左右
   * 中序：左根右
   */
  function parse(leftP, rightP, leftI, rightI) {
    if (leftP > rightP || leftI > rightI) {
      return null;
    }
    let val = postorder[rightP];
    let root = new TreeNode(val);

    let rootPosI = getPosI(val); // 根元素在 inorder 中的位置
    let left = rootPosI - leftI; // 左子节点的个数：中序遍历中，只要是在根元素左边，都是其左子树（或左后代子树）

    root.left = parse(leftP, leftP + left - 1, leftI, rootPosI - 1);
    root.right = parse(leftP + left, rightP - 1, rootPosI + 1, rightI);
    return root;
  }
  return parse(0, LEN - 1, 0, LEN - 1);
};

// 获取 v 元素在 orderArr 中的角标（orderArr元素不重复）
function getPos(v, orderArr) {
  for (let i = 0; i < orderArr.length; i++) {
    if (orderArr[i] == v) {
      return i;
    }
  }
  return -1;
}
