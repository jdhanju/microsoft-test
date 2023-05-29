function parseArrayToBinaryTree(arr) {
  const parseNode = (nodeArr) => {
    const node = {
      id: nodeArr[0], //setting id value of the node
      left: null,
      right: null
    };

    //if the left child value exists then recursively traverse through the left child
    if (nodeArr[1]) {
      node.left = parseNode(nodeArr[1]);
    }

    //if the right child value exists then recursively traverse through the right child
    if (nodeArr[2]) {
      node.right = parseNode(nodeArr[2]);
    }

    if (node.right === null && node.left === null) {
      //remove left and right if they're both null
      //this cleans prevents a node displaying its children if they're both null
      delete node.right;
      delete node.left;
    }

    return node;
  };


  return parseNode(arr);
}

export default parseArrayToBinaryTree;