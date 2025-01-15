import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <React.Fragment>
      <div className="App">
    <Notifications/>
    </div>
        <Header/>
      <Login/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;