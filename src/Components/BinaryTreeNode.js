
import React from 'react';

const BinaryTreeNode = ({ node, borderNodeID }) => {
  const renderTree = (currentNode, parentPosition) => {

    if (currentNode && !Object.hasOwn(currentNode, 'id')) {
      return null;
    }

    const { id, left, right } = currentNode ?? {};

    const nodePosition = parentPosition === 'left' ? 'left' : 'right';

    return (
      <div className='mainNodeDiv'>
        <div className={borderNodeID === id ? "node-with-border" : "node"} >
          <div className={`${nodePosition}`} id={borderNodeID === id ? "node-with-border" : ""}>
            <div className="node-id">{id}</div>
            {left || right ? <div className='node-parent'>
              <div className="node-children">
                {renderTree(left, 'left')}
                {renderTree(right, 'right')}
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    );
  };

  return <div className="binary-tree">{renderTree(node, '')}</div>;
};

export default BinaryTreeNode;