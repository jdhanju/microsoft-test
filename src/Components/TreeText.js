import { useSelector } from 'react-redux';
import parseArrayToBinaryTree from '../microsoft-p1.js';

const TreeTextComponent = () => {
    //get data from redux store
    const fileContent = useSelector((state) => state.fileContent);
    let treeJSON = '';
 
    if(fileContent !== ''){
        treeJSON = JSON.stringify(parseArrayToBinaryTree(fileContent), null, 2);
        console.log(treeJSON);
    }

    return (
      
        <div className="treeText">
        <h3>Tree Text</h3>
        <textarea
          className="text-field"
          value={treeJSON}
          style={{width:"30%", height:"75%"}}
        />
      </div>
      
    )
}

export default TreeTextComponent;