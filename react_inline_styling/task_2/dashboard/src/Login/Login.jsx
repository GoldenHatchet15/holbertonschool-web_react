import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  login: {
    margin: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  inputGroup: {
    margin: '1rem 0',
  },
  label: {
    marginRight: '1rem',
  },
});

const Login = () => (
  <div className={css(styles.login)}>
    <p>Login to access the full dashboard</p>
    <div className={css(styles.inputGroup)}>
      <label htmlFor="email" className={css(styles.label)}>
        Email:
      </label>
      <input id="email" name="email" type="email" data-testid="input-element" />
    </div>
    <div className={css(styles.inputGroup)}>
      <label htmlFor="password" className={css(styles.label)}>
        Password:
      </label>
      <input id="password" name="password" type="password" data-testid="input-element" />
    </div>
    <button>OK</button>
  </div>
);

// Assign a name to the wrapped component
const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
