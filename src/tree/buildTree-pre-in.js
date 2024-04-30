// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
/**
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const LEN = preorder.length; // inorder.length
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
    let val = preorder[leftP];
    let root = new TreeNode(val);

    let rootPosI = getPosI(val); // 根元素在 inorder 中的位置
    let left = rootPosI - leftI; // 左子节点的个数：中序遍历中，只要是在根元素左边，都是其左子树（或左后代子树）

    /*
        let llp = leftP+1;
        let lrp = leftP+left;
        let rlp = lrp + 1;
        let rrp = rightP;

        let lli = leftI;
        let lri = rootPosI - 1;
        let rli = rootPosI + 1;
        let rri = rightI;
        root.left  = parse(llp, lrp, lli, lri);
        root.right = parse(rlp, rrp, rli, rri);
        */
    root.left = parse(leftP + 1, leftP + left, leftI, rootPosI - 1);
    root.right = parse(leftP + left + 1, rightP, rootPosI + 1, rightI);
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
