/**
 * output all the Text nodes between the given 2 Nodes
 * @param {HTML Node} node1 
 * @param {HTML Node} node2 
 */
function outputAll(node1, node2) {
  console.log('start');

  let found = false;

  // print  node1
  // find next node
  // sibling node, if we're done with siblings, go up the tree
  // keep getting a next node until we get to node2

  let node = node1;
  visitNode(node);

  // if still not found, look at node1's siblings
  while (!found) {

    // find a next sibling
    while (!node.nextSibling) {
      if (node.parentNode) {
        node = node.parentNode;
      } else {
        return;
      }
    }
    node = node.nextSibling;
    visitNode(node);
  }



  function visitNode(node) {
    if (node.nodeType === node.TEXT_NODE) console.log(node.data.trim());
    if (node === node2) {
      found = true;
      return true;
    }

    for (let child of node.childNodes) {
      if (visitNode(child)) return true;
    }
  }
}

// const node1 = document.getElementById('nodeA');
const node1 = document.getElementById('nodeB');
const node2 = document.getElementById('nodeD');

outputAll(node1, node2);