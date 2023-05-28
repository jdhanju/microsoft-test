import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFileContent } from '../store';
import React, { useEffect, useState } from 'react';



const TreeTextComponent = () => {
    //displays JSON error message
    const [jsonError,setJsonError] = useState(false);
    const [treeJSON, setTreeJSON] = useState('');
    //get data from redux store
    const dispatch = useDispatch();
    const fileContent = useSelector((state) => state.fileContent);

    useEffect(() => {
        if(fileContent !== ''){
            setTreeJSON(JSON.stringify(fileContent, null, 2));
            document.getElementById("textArea").value = JSON.stringify(fileContent, null, 2);
        }

    }, [fileContent])


    const handleTextFieldChange  = (event) => {
        try{
            setJsonError(false); //removes JSON error message

            //update redux store to new change
           setTreeJSON(JSON.parse(event.target.value));
           console.log(treeJSON)
           dispatch(setFileContent(JSON.parse(event.target.value)));
    
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
          id="textArea"
          name="text"
          onChange={(event) => handleTextFieldChange(event)}
          style={{width:"30%", height:"75%"}}
        />

        {jsonError ? <p className="error">Invalid JSON Format</p> : null}
      </div>
      
    )
}

export default TreeTextComponent;