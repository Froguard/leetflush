function removeNode(root, val) {
  if (!root) {
    return null;
  }
  let { left, right } = root;
  let nVal = root.val;
  if (val < nVal) {
    root.left = removeNode(left, val);
  } else if (val > nVal) {
    root.right = removeNode(right, val);
  } else {
    // 找到目标了
    if (!left && !right) {
      // 叶子节点
      root = null;
    } else if (!left && right) {
      root = right;
    } else if (left && !right) {
      root = left;
    } else {
      let minChild = findMinNode(right);
      const minVal = minChild.val;
      root.val = minVal; // 使用更新值这种方式去删除它
      root.right = removeNode(root, minVal);
    }
  }
  return root;
}

function findMinNode(node) {
  while (node && node.left) {
    node = node.left;
  }
  return node;
}
