import './App.css';
import FileUploadComponent from './Components/FileUpload';
import TreeTextComponent from './Components/TreeText';
import OutputField from './Components/Output';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Microsoft Screening Problem</h1>
      </header>
      <h3>Upload your array tree here!</h3>
      <FileUploadComponent />
      <TreeTextComponent />
      <OutputField />
    </div>
  );
}

export default App;
