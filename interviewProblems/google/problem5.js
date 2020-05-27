// 5) Giving a binary tree, output the deepest node (priortizing the right most node).

function deepestNode(node) {
  if (!node) return;

  let maxLevel = 0;
  let deepestNode = node;

  visitNode(node, 0);
  return deepestNode;

  function visitNode(node, level) {
    const { left, right } = node;

    if (level >= maxLevel) {
      maxLevel = level;
      deepestNode = node;
    }

    if (left) visitNode(left, level + 1);
    if (right) visitNode(right, level + 1);
  }
}
