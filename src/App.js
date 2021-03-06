import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Trailer from './components/trailer';

function App() {
  return (
    <div className="App">
      
      {/* The below is like params it assigns the string to the component */}
      <Header theHeaderText= "Did this work?" />
      <Trailer pageNumber="1"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
