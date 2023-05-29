function findSmallestSubtreeWithDeepestNodes(root) {
    // Find the depth of a node
    const findDepth = (node) => {
        if (!node) {
            return 0;
        }
        //recursively finds the deepest node in a DFS pattern
        return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
    };

    // Helper function to find the smallest subtree with all the deepest nodes
    const findSmallestSubtree = (node, depth) => {
        if (!node) {
            return null;
        }

        //we have reached maximum depth of the tree
        if (depth === 1) {
            return node;
        }

        const leftDepth = findDepth(node.left);
        const rightDepth = findDepth(node.right);

        //The current node is part of the smallest subtree containing
        //all the deepest nodes
        if (leftDepth === rightDepth && leftDepth === depth - 1) {
            return node;
        }

        if (leftDepth >= rightDepth) {
            return findSmallestSubtree(node.left, depth - 1);
        } else {
            return findSmallestSubtree(node.right, depth - 1);
        }
    };

    const maxDepth = findDepth(root);
    const smallestSubtreeNode = findSmallestSubtree(root, maxDepth);

    return smallestSubtreeNode;
}


export default findSmallestSubtreeWithDeepestNodes