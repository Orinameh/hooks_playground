import React from 'react';
// import Dropzone from './dropzone/Dropzone'
import './App.css';
import Login from './login/Login';

function App() {
  return (
    <div className="App">
        {/* <div className="Card">
          <Dropzone onFilesAdded={console.log} />
        </div> */}
        <Login />
      </div>
  );
}

export default App;
