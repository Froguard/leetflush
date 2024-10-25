/**
 * 重建二叉树（前序+中序）【中等】
 * // https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=295&tqId=23282&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
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
 * @param preOrder int整型一维数组
 * @param vinOrder int整型一维数组
 * @return TreeNode类
 */
function reConstructBinaryTree(preOrder, vinOrder) {
  const LEN = preOrder.length; // vinOrder.length
  if (LEN == 0) {
    return null;
  }
  // 前序/后序+中序序列可以唯一确定一棵二叉树，所以自然而然可以用来建树
  function getPosI(v) {
    return getPos(v, vinOrder);
  }
  /**
   * 分治方式，构建节点
   * @param {number} leftP
   * @param {number} rightP
   * @param {number} leftI
   * @param {number} rightI
   * @returns {TreeNode} 二叉树节点
   */
  function parse(leftP, rightP, leftI, rightI) {
    if (leftP > rightP || leftI > rightI) {
      return null;
    }
    let val = preOrder[leftP];
    let root = new TreeNode(val);

    let rootPosI = getPosI(val); // 根元素在 vinOrder 中的位置
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
}

/**
 * 获取 v 元素在 orderArr 中的角标
 * - orderArr 指的是二叉树的遍历序列（前序，中序，后序，都可以）
 * - 注意：前提是 orderArr 元素不重复
 * @param {number} v
 * @param {Array<number>} orderArr
 * @returns {number} index 角标/坐标（从 0 开始算）
 */
function getPos(v, orderArr) {
  for (let i = 0; i < orderArr.length; i++) {
    if (orderArr[i] == v) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
