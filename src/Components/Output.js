import { useSelector } from 'react-redux';
import BinaryTreeNode from './BinaryTreeNode';
import findSmallestSubtreeWithDeepestNodes from "../SmallestSubTree";


const OutputField = () => {
    const fileContent = useSelector((state) => state.fileContent);
    let treeData = null;
    let borderNode = {};

    //only set these variables if the user has uploaded a valid JSON file
    if (fileContent !== '') {
        treeData = fileContent
        borderNode = findSmallestSubtreeWithDeepestNodes(treeData);
        console.log(treeData);
        console.log(JSON.stringify(borderNode, null, 2));
    }


    return (
        <div className="output">
            <div className="innerWrapper">
                <h3>Output</h3>
                <div className="binary-tree">
                    {treeData ? <BinaryTreeNode node={treeData} borderNodeID={borderNode.id} /> : null}
                </div>
            </div>
        </div>
    );
}

export default OutputField;