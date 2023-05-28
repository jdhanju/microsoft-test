function parseArrayToBinaryTree(arr) {
  const parseNode = (nodeArr) => {
    const node = {
      id: nodeArr[0],
      left: null,
      right: null
    };

    if (nodeArr[1]) {
      node.left = parseNode(nodeArr[1]);
    }

    if (nodeArr[2]) {
      node.right = parseNode(nodeArr[2]);
    }

    if(node.right === null && node.left === null){
      //remove left and right if they're both null
      delete node.right;
      delete node.left;
    }

    return node;
  };


  return parseNode(arr);
}

// function parseArrayToBinaryTree(arr) {
//   const parseNode = (nodeArr) => {
//     const node = {
//       id: nodeArr[0]
//     };

//     if (nodeArr[1] && nodeArr[1].length > 0) {
//       const leftNode = parseNode(nodeArr[1]);
//       if (leftNode !== null) {
//         node.left = leftNode;
//       }
//     }

//     if (nodeArr[2] && nodeArr[2].length > 0) {
//       const rightNode = parseNode(nodeArr[2]);
//       if (rightNode !== null) {
//         node.right = rightNode;
//       }
//     }

//     if (node.left === undefined && node.right === undefined) {
//       delete node.left;
//       delete node.right;
//     }

//     return node;
//   };

//   return parseNode(arr);
// }


//const input1 = ["a", ["b", ["b1"], ["b2", ["b21"], ["b22"]]], ["c", ["c1", ["c11", ["c111"]], ["c12", null, ["c121"]]], ["c2", null, ["c21"]]]]
//const output1 = parseArrayToBinaryTree(input1);
//console.log(JSON.stringify(output1, null, 2));

// const input2 = [1, [2], [3, null, [5]]];
// const output2 = parseArrayToBinaryTree(input2);
// console.log(JSON.stringify(output2, null, 2));

export default parseArrayToBinaryTree;