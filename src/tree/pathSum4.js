// https://leetcode-cn.com/problems/path-sum-iv
/**
对于一棵深度小于 5 的树，可以用一组三位十进制整数来表示。

对于每个整数：

百位上的数字表示这个节点的深度 D，1 <= D <= 4。
十位上的数字表示这个节点在当前层所在的位置 P， 1 <= P <= 8。位置编号与一棵满二叉树的位置编号相同。
个位上的数字表示这个节点的权值 V，0 <= V <= 9。
给定一个包含三位整数的升序数组，表示一棵深度小于 5 的二叉树，请你返回从根到所有叶子结点的路径之和。

示例 1：

输入: [113, 215, 221]
输出: 12
解释:
这棵树形状如下:
    3
   / \
  5   1

路径和 = (3 + 5) + (3 + 1) = 12.
示例 2：

输入: [113, 221]
输出: 4
解释:
这棵树形状如下:
    3
     \
      1

路径和 = (3 + 1) = 4.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  let nodesList = [];
  // 1.生成层序遍历的二维数组
  for (let n of nums) {
    let depth = Math.floor(n / 100) - 1;
    let pos = Math.floor((n % 100) / 10) - 1;
    let val = n % 10;
    nodesList[depth] = nodesList[depth] || new Array(2 ** depth).fill(null); // 2^depth 个
    nodesList[depth][pos] = val;
  }
  // 2.用层序遍历的二维数组，还原出整棵树，root
  // 方法：从层序二维数组的末尾往前遍历，优先生成低层的子节点，然后将低层子节点设置到上一层节点的left和right上
  let tmpNodes = null;
  while (nodesList.length) {
    let row = nodesList.pop();
    let nodes = [];
    for (let i = 0; i < row.length; i++) {
      let newNode = null;
      let v = row[i];
      if (v !== null) {
        newNode = new TreeNode(v);
        if (tmpNodes && tmpNodes.length) {
          let childDepth = 2 * i;
          let leftPos = childDepth;
          let rightPos = childDepth + 1;
          newNode.left = tmpNodes[leftPos] === undefined ? null : tmpNodes[leftPos];
          newNode.right = tmpNodes[rightPos] === undefined ? null : tmpNodes[rightPos];
        } else {
          newNode.left = newNode.right = null;
        }
      }
      nodes.push(newNode);
    }
    tmpNodes = nodes;
  }

  let root = tmpNodes[0];

  return calcPathSum(root);
};

function calcPathSum(root) {
  let res = 0;
  function traversal(node, sum = 0) {
    if (!node) {
      return;
    }
    let { left, right, val } = node;
    sum += val;
    if (!left && !right) {
      // 叶子节点
      res += sum;
    } else {
      left && traversal(left, sum);
      right && traversal(right, sum);
    }
  }
  traversal(root, 0);
  return res;
}

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
