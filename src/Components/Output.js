import { useSelector } from 'react-redux';
import parseArrayToBinaryTree from '../microsoft-p1.js';
import BinaryTreeNode from './BinaryTreeNode';

//given a tree perform Breadth first search, and return displayble output
// function BreadthFirstSearchOutput(node){
//     const treeInOrder = [];
//     if(node !== null){
//         //treeInorder Will hold a list view of binary tree
//         treeInOrder.push([node]) //push the root of the tree into the array
//     }
//     const bfs = (queue)  => {
//         var newQueue = [];
//         queue.forEach(function (node) {

//             if(node !== null){
//                 node.left && newQueue.push(node.left);
//                 node.right && newQueue.push(node.right);

//                 if(node.left === null){
//                     newQueue.push(node.left);
//                 } else if(node.right === null){
//                     newQueue.push(node.right);
//                 }

//            }
//         });
//         console.log(newQueue);
//         treeInOrder.push(newQueue);
//         newQueue.length && bfs(newQueue);
//     }

//     bfs([node]);
//     //each element in treeInorder array represents a level from the binary tree
//     console.log(treeInOrder);
//     return treeInOrder;
// }



const OutputField = () => {
    const fileContent = useSelector((state) => state.fileContent);
    const treeData = parseArrayToBinaryTree(fileContent);

    // const BinaryTreeDisplay = bfsResults.map((list) => {
    //     return(
    //     <p>
    //     {list.map(item => {
    //         if (item === null){
    //             return '    ';
    //         } else{
    //             return item.id;
    //         }
    //     })}
    //     </p>
    //     )
    // })

    return(
        <div className="output">
            <div className="innerWrapper">
                <h3>Output</h3>
                <div className="binary-tree">
                    <BinaryTreeNode node={treeData} />
                </div>
            </div>
        </div>
    );
}

export default OutputField;