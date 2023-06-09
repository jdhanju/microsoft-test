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

//comment lines 31 to 37 to remove these test cases
const input1 = ["a", ["b", ["b1"], ["b2", ["b21"], ["b22"]]], ["c", ["c1", ["c11", ["c111"]], ["c12", null, ["c121"]]], ["c2", null, ["c21"]]]]
const output1 = parseArrayToBinaryTree(input1);
console.log(JSON.stringify(output1, null, 2));

const input2 = [1, [2], [3, null, [5]]];
const output2 = parseArrayToBinaryTree(input2);
console.log(JSON.stringify(output2, null, 2));
