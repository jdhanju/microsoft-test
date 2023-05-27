// import React from 'react';

// const BinaryTreeNode = ({ node }) => {
//   const renderTree = (currentNode, level) => {
//     if (currentNode === null) {
//       return null;
//     }

//     const { id, left, right } = currentNode;

//     return (
//       <div className="tree-level" style={{ marginLeft: level * 40 }}>
//         <div className="node">
//           <div className="node-id">{id}</div>
//         </div>
//         <div className="node-children">
//           {renderTree(left, level + 1)}
//           {renderTree(right, level + 1)}
//         </div>
//       </div>
//     );
//   };

//   return <div>{renderTree(node, 0)}</div>;
// };

// export default BinaryTreeNode;

// import React from 'react';

// const BinaryTreeNode = ({ node }) => {
//   const renderTree = (currentNode) => {
//     if (currentNode === null) {
//       return null;
//     }

//     const { id, left, right } = currentNode;

//     return (
//       <div className="tree-level">
//         <div className="node">
//           <div className="node-id">{id}</div>
//         </div>
//         <div className="node-children">
//           {renderTree(left)}
//           {renderTree(right)}
//         </div>
//       </div>
//     );
//   };

//   return <div className="binary-tree">{renderTree(node)}</div>;
// };

// export default BinaryTreeNode;

// import React from 'react';

// const BinaryTreeNode = ({ node }) => {
//   const renderTree = (currentNode, level) => {
//     if (currentNode === null) {
//       return null;
//     }

//     const { id, left, right } = currentNode;

//     return (
//       <div className="tree-level">
//         <div className="node">
//           <div className="node-id">{id}</div>
//         </div>
//         <div className="node-children">
//           {renderTree(left, level + 1)}
//           {renderTree(right, level + 1)}
//         </div>
//       </div>
//     );
//   };

//   return <div className="binary-tree">{renderTree(node, 0)}</div>;
// };

// export default BinaryTreeNode;

import React from 'react';

const BinaryTreeNode = ({ node }) => {
  const renderTree = (currentNode) => {
    if (currentNode === null) {
      return null;
    }

    const { id, left, right } = currentNode;

    return (
      <div className="node">
        <div className="node-id">{id}</div>
        <div className="node-children">
          {renderTree(left)}
          {renderTree(right)}
        </div>
      </div>
    );
  };

  return <div className="binary-tree">{renderTree(node)}</div>;
};

export default BinaryTreeNode;