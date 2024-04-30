const util = require('util');
const custom = util.inspect.custom || Symbol.for('util.inspect.custom');

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
// TreeNode.prototype[custom] = function() {
//     return this.toString();
// };
TreeNode.prototype.toString = function () {};

/**
 * 将树按照二维数组打印，其中每一行为同一层节点
 *                | arr =
 *                |    [
 *   3            |        [3],                 // arr[0]
 *  / \           |
 * 9  20     ==>  |        [9, 20]              // arr[1]
 *   /  \         |
 *  15   7        |        [null, null, 15, 7]  // arr[2]
 *                |    ]
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
/**
 * TODO:
 * 未完成！！！！
 * 将上述 arraiefy 之后得到的二维数组组合成字符串
 * @param {Array<array>} treeArr
 */
function treeArr2string(treeArr) {
  let res = [];
  const SPACE = ' ';
  const EMPTY = 'null';
  for (let i = treeArr.length - 1; i >= 0; i--) {
    let isFirstRow = i === 0;
    let tmp = treeArr[i];
    let rowLines = [];
    let rowNums = [];
    for (let j = 0; j < tmp.length; j++) {
      let isLeftLeave = j % 2 === 0;
      let isLastCol = j === tmp.length - 1;
      let t = tmp[j];
      let rl = SPACE,
        rn = EMPTY;
      if (t !== null) {
        rl = isLeftLeave ? '/' : '\\';
        rn = t;
      }
      rowNums.push(rn);
      if (!isFirstRow) {
        rowLines.push(rl);
      }
    }
    res.unshift(rowNums);
    !isFirstRow && res.unshift(rowLines);
  }
  return res;
}

// 层数
function treeLen(treeNode) {
  let l = 0,
    r = 0;
  const { left, right } = treeNode;
  if (!left && !right) {
    return 1;
  } else {
    l = 1 + treeLen(left);
    r = 1 + treeLen(right);
  }
  return Math.max(l, r);
}
// 深度
function treeDepth(treeNode) {
  return treeLen(treeNode) - 1;
}

// 通过数组，构建二叉树，空节点用null表示
function createBinaryTreeNodeByArr(values) {
  /*
    数组转变成二位数组
    eg：
       [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
         ↓↓↓
       [
         [1],                     // 长度 2^0 = 1
         [2,3],                   // 长度 2^1 = 2
         [4,5,6,7],               // 长度 2^2 = 4
         [8,9,10,11,12,13,14,15]  // 长度 2^3 = 8
       ]
    */
  let treeArr = [],
    tmpRow = null;
  for (let i = 0; values.length; i++) {
    tmpRow = [];
    for (let j = 0; j < Math.pow(2, i); j++) {
      values.length && tmpRow.push(values.shift());
    }
    treeArr.push(tmpRow);
  }
  /*
    从 treeArr 尾部开始反向往前循环，每次循环执行批量创建节点，
    1.和上一次生成的 nodes 进行组合计算出这一批 node 的 left 和 right
    2.新节点放入tmpNodes
    3.循环执行完之后，将会到达根节点，即 tmpNodes 将会只含有一个根元素
    */
  let tmpNodes = null;
  while (treeArr.length) {
    let row = treeArr.pop();
    let nodes = [];
    for (let i = 0; i < row.length; i++) {
      let node = null;
      let v = row[i];
      if (v !== null) {
        node = new TreeNode(v);
        if (tmpNodes && tmpNodes.length) {
          let j = 2 * i;
          node.left = tmpNodes[j] === undefined ? null : tmpNodes[j];
          node.right = tmpNodes[j + 1] === undefined ? null : tmpNodes[j + 1];
        } else {
          node.left = node.right = null;
        }
      }
      nodes.push(node);
    }
    tmpNodes = nodes;
  }
  return tmpNodes[0];
}

function test() {
  let node = createBinaryTreeNodeByArr([1, 2, 3, 4, null, null, 5, null]);
  console.log(node);
  let treeArr = arraiefy(node);
  console.log(treeArr);
  console.log(treeArr2string(treeArr));
}

// test();

module.exports = {
  TreeNode,
  createBinaryTreeNodeByArr,
};
