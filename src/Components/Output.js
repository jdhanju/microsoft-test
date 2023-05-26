import { useSelector } from 'react-redux';

//given a tree perform depth first search, and return displayble output
function depthFirstSearchOutput(tree){
    if (tree) {
        console.log(tree.id);
        depthFirstSearchOutput(tree.left);
        depthFirstSearchOutput(tree.right)
    }
}

const OutputField = () => {
    const fileContent = useSelector((state) => state.fileContent);
    depthFirstSearchOutput(JSON.parse(fileContent));

    return(
        <div className="output">
            <div className="innerWrapper">
                <h3>Output</h3>
            </div>
        </div>
    );
}

export default OutputField;