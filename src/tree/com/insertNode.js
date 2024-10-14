function insert(root, val) {
  let newNode = new TreeNode(val);
  if (!root) {
    root = newNode;
  } else {
    insertNode(root, newNode);
  }
  return root;
}

function insertNode(node, newNode) {
  if (!node) {
    return newNode;
  }
  let { left, right, val } = node;
  if (newNode.val < val) {
    if (left === null) {
      node.left = newNode;
    } else {
      insertNode(left, newNode);
    }
  } else {
    if (right === null) {
      node.right = newNode;
    } else {
      insertNode(right, newNode);
    }
  }
  return node;
}
