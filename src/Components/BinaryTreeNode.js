

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