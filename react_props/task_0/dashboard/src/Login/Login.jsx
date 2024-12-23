import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <p>Login to access the full dashboard</p>
    <div>
          <label htmlFor="email">Email:</label>
          <input data-testid="input-element" type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input data-testid="input-element" type="password" id="password" name="password" />
        </div>
        <button>OK</button>
  </div>
);

export default Login;
