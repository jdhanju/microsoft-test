import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFileContent } from '../store';
import parseArrayToBinaryTree from '../microsoft-p1.js';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonError, setJsonError] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = (e) => {
    // Perform upload logic here using selectedFile

    //load file
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        try {
          //update redux store with parsed data
          dispatch(
            setFileContent(
              parseArrayToBinaryTree(
                JSON.parse(fileContent.toString())
              )
            )
          );
          //remove error message
          setJsonError(false);
        } catch (e) {
          console.log(e)
          //display Invalid JSON error message
          setJsonError(!jsonError);
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept=".json, .txt" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Fetch</button>
      {/* Only show this error message if we have an incorrect json file */}
      {jsonError ?
        <p className="error" id="textError">Invalid JSON Format</p>
        : null}
    </div>
  );
};

export default FileUploadComponent;