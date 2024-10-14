function search(root, val) {
  if (!root) {
    return null;
  }
  return searchNode(root, val);
}

function searchNode(node, val) {
  if (!node) {
    return null;
  }
  let nVal = node.val;
  let { left, right } = node;
  if (val < nVal) {
    return searchNode(left, val);
  } else if (val > nVal) {
    return searchNode(right, val);
  } else {
    return node;
  }
}
