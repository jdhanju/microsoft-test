import './App.css';
import FileUploadComponent from './Components/FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Microsoft Screening Problem</h1>
      </header>
      <h3>Upload your array tree here!</h3>
      <FileUploadComponent />
    </div>
  );
}

export default App;
