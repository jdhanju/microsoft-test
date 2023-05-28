import { useSelector } from 'react-redux';
import parseArrayToBinaryTree from '../microsoft-p1.js';
import { useDispatch } from 'react-redux';
import { setFileContent } from '../store';
import React, { useState } from 'react';



const TreeTextComponent = () => {
    //displays JSON error message
    const [jsonError,setJsonError] = useState(false);
    //get data from redux store
    const dispatch = useDispatch();
    const fileContent = useSelector((state) => state.fileContent);
    let treeJSON = '';
 
    if(fileContent !== ''){
        treeJSON = JSON.stringify(fileContent, null, 2);
        //console.log(treeJSON);
    }


    const handleTextFieldChange  = (event) => {
        //event.target.defaultValue
        try{
            setJsonError(false); //removes JSON error message

            //update redux store to new change
            //console.log(event.target.value);
           const editedJSON = JSON.parse(event.target.value);
           console.log(editedJSON)
           dispatch(setFileContent(editedJSON));
    
        } catch(e){
            //edited JSON is not valid JSON
            setJsonError(!jsonError);
            console.log(e);
    
        }
    }

    return (
      
        <div className="treeText">
        <h3>Tree Text</h3>
        <textarea
          className="text-field"
          name="text"
          onChange={(event) => handleTextFieldChange(event)}
          defaultValue={treeJSON}
          style={{width:"30%", height:"75%"}}
        />

        {jsonError ? <p className="error">Invalid JSON Format</p> : null}
      </div>
      
    )
}

export default TreeTextComponent;