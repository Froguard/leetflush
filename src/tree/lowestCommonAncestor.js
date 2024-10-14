// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
/**
二叉搜索树的最近公共祖先

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。

示例 2:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 
说明:
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.next === q) {
    return p;
  }
  if (q.next === p) {
    return q;
  }
  // 方法一，最笨的方法，递归搜索找到p，q节点，过程中将 p 和 q 的父节点（无论直接还是间接）都逆序的放到数组里边去，形成两个数组 ftsP， ftsQ，然后比较PQ，找第一个共同元素即可
  let fathersP = getFathers(root, p),
    fathersQ = getFathers(root, q);
  let n1 = p,
    n2 = q;
  let fts1 = fathersP,
    fts2 = fathersQ;
  if (fathersP.length > fathersQ.length) {
    fts1 = fathersQ;
    fts2 = fathersP;
    n1 = q;
    n2 = p;
  }
  // console.log(`${n1.val} ${fts1.map(a=>a.val).join('←')}`);
  // console.log(`${n2.val} ${fts2.map(a=>a.val).join('←')}`);
  if (fts2.includes(n1)) {
    return n1;
  }
  let resNode = null;
  for (let f1 of fts1) {
    if (resNode !== null) {
      break;
    }
    for (let f2 of fts2) {
      // console.log(f1.val, f2.val);
      if (f2.val === f1.val) {
        // console.log('Bingo!');
        resNode = f1;
        return resNode;
        // break;
      }
    }
  }
  // console.log(resNode.val);
  return resNode;

  // 方法二，需要用到二叉搜索树的特性，左右的值大小是有原则的
  /**
   * 二叉搜索树BST：（Binary Search Tree），（又：二叉搜索树，二叉排序树）
   * - 它或者是一棵空树，或者是具有下列性质的二叉树
   * - 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
   * - 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
   * - 它的左、右子树也分别为二叉排序树。二叉搜索树作为一种经典的数据结构，它既有链表的快速插入与删除操作的特点，又有数组快速查找的优势；
   */
  // TODO：
};

// 获取 targetNode 的父节点们
function getFathers(root, targetNode) {
  let fathers = [];
  function travel(root) {
    let { val, left, right } = root;
    // 由于题设里边已经说了，所有节点的值都是唯一的，所以可以直接使用值对比方式来判定
    if (val === targetNode.val) {
      return;
    } else {
      isFatherOf(root, targetNode) && fathers.unshift(root);
      left && travel(left);
      right && travel(right);
    }
  }
  travel(root);
  return fathers;
}

// 判断 node 是否是 targetNode 的父节点（或间接父节点）
function isFatherOf(node, targetNode) {
  let isFart = false;
  let { left, right } = node;
  if (!(left === null && right === null)) {
    if (left === targetNode || right === targetNode) {
      isFart = true;
    } else {
      isFart = (left && isFatherOf(left, targetNode)) || (right && isFatherOf(right, targetNode));
    }
  }
  return isFart;
}
