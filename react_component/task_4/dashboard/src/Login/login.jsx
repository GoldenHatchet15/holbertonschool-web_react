import React from 'react';
import './Login.css';
import WithLogging from '../HOC/WithLogging';

const Login = () => (
  <div className="login">
    <p>Login to access the full dashboard</p>
    <div>
      <label htmlFor="email">Email:</label>
      <input data-testid="input-element" id="email" name="email" type="email" />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input data-testid="input-element" id="password" name="password" type="password" />
    </div>
    <button>OK</button>
  </div>
);

export default WithLogging(Login);
