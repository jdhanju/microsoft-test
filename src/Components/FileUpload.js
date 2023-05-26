import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonError,setJsonError] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // Perform upload logic here using selectedFile
    console.log(selectedFile);

    //load file
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        //console.log(fileContent);
        try {
          console.log(JSON.parse(fileContent.toString()));
          setJsonError(false);
        } catch (e) {
          console.log("error!")
          setJsonError(!jsonError);
        }
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Fetch</button>
      {/* Only show this error message if we have an incorrect json file */}
      {jsonError ? 
      <p id="error">Invalid JSON Format</p>
       : null}
    </div>
  );
};

export default FileUploadComponent;