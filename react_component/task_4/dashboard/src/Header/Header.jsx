// task_2/dashboard/src/App.jsx
import React from 'react';
import './Header.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import logo from '../assets/holberton-logo.jpg';


const Header = () => (
  <div className="Header">
      <Notifications />
      <header className="header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      
    </div>
);

export default Header;