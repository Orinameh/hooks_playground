import React from 'react';
// import Dropzone from './dropzone/Dropzone'
// import './App.css';
import './index.css';
// import Login from './login/Login';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
        {/* <div className="Card">
          <Dropzone onFilesAdded={console.log} />
        </div> */}
        {/* <Login /> */}
        <ThemeContextProvider>
            <AuthContextProvider>
              <Navbar />
              <BookContextProvider >
                <BookList />
              </BookContextProvider>
              <ThemeToggle />
            </AuthContextProvider>
        </ThemeContextProvider>
      </div>
  );
}

export default App;
