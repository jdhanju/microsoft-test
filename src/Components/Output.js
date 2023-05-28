import { useSelector } from 'react-redux';
import parseArrayToBinaryTree from '../microsoft-p1.js';
import BinaryTreeNode from './BinaryTreeNode';




const OutputField = () => {
    const fileContent = useSelector((state) => state.fileContent);
    let treeData = null;
    console.log(fileContent);
    //treeData = parseArrayToBinaryTree(fileContent);

    if(fileContent !== ''){
        treeData = fileContent
    }

    console.log(fileContent);

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