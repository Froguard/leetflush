/**
 * 二叉树的遍历
 * @param {TreeNode} node
 * @param {Array<number>} records
 * @returns {void}
 */
function travel(node, records) {
  if (!node) {
    return;
  }
  const { left, right, val } = node;

  // 前序遍历
  records.push(val);
  left && travel(left, records);
  right && travel(right, records);

  // // 中序遍历
  // left && travel(left, records);
  // records.push(val);
  // right && travel(right, records);

  // // 后序遍历
  // left && travel(left, records);
  // right && travel(right, records);
  // records.push(val);
}

/**
 * 获取二叉树的高度
 * @param {TreeNode} node
 */
function getTreeDepth(node, curDepth = 0) {
  if (!node) {
    return curDepth;
  }
  const { left, right } = node;
  curDepth += 1;
  return Math.max(getTreeDepth(left, curDepth), getTreeDepth(right, curDepth));
}

/**
 * 针对【二叉搜索树】
 * 计算出目标节点到根节点的路径，方向是从根节点开始
 * @param {TreeNode} root
 * @param {number} v
 * @param {Array<number>} path 存结果用的数组
 * @returns {void}
 */
function calcPathFromRoot(root, v, path) {
  if (!root) {
    return;
  }
  const { left, val, right } = root;
  path.push(val);
  if (val === v) {
    return;
  }
  if (v < val) {
    left && calcPathFromRoot(left, v, path);
  } else {
    right && calcPathFromRoot(right, v, path);
  }
}

// 判断 node 是否是 targetNode 的祖先节点（直接父节点或间接父节点）
function isAncestorOf(node, targetNode) {
  let { left, right } = node;
  if (left === null && right === null) {
    return false;
  }
  //
  let isFart = false;
  if (left === targetNode || right === targetNode) {
    isFart = true;
  } else {
    isFart = (left && isAncestorOf(left, targetNode)) || (right && isAncestorOf(right, targetNode));
  }
  return isFart;
}
