import React from 'react';
import './App.css'; // Make sure the path is correct
import logo from './assets/holberton-logo.jpg'; // Adjust the path as needed
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';


function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)} - Copyright {getCurrentYear()} - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
