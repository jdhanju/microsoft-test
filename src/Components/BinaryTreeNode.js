
import React from 'react';

const BinaryTreeNode = ({ node, borderNodeID }) => {
  const renderTree = (currentNode, parentPosition) => {

    if(currentNode === null || currentNode === undefined || (!Object.hasOwn(currentNode, 'id') && (Object.hasOwn(currentNode, 'left') || Object.hasOwn(currentNode, 'right') ))){
      return null;
    }

    //if id doesn't exist
    if (!Object.hasOwn(currentNode, 'id')) {
      return null;
    }

    const { id, left, right } = currentNode;

    const nodePosition = parentPosition === 'left' ? 'left' : 'right';

    return (
      <div>
        <div className={borderNodeID === id? "node-with-border" : "node"} >
          <div className={`node ${nodePosition}`}>
            <div className="node-id">{id}</div>
            <div className="node-children">
              {renderTree(left, 'left')}
              {renderTree(right, 'right')}
            </div>
            </div>
          </div>
        </div>
    );
  };

  return <div className="binary-tree">{renderTree(node, '')}</div>;
};

export default BinaryTreeNode;