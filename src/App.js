import React from 'react';
import logo from './assets/rocket.svg';
import astronaut from './assets/astronaut.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Rocketseat Logo" />
      <h2>Welcome to OmniStack!</h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <img className="astronaut" src={astronaut} alt="Astronaut" />
    </div>
  );
}

export default App;
