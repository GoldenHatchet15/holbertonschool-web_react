import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  login: {
    margin: '2rem',
    fontFamily: 'Arial, sans-serif',
    '@media (max-width: 900px)': {
      margin: '1rem',
    },
  },
  inputGroup: {
    margin: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  label: {
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      marginRight: 0,
      marginBottom: '0.5rem',
    },
  },
  button: {
    marginTop: '1rem',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

const Login = () => (
  <div className={css(styles.login)}>
    <p>Login to access the full dashboard</p>
    <div className={css(styles.inputGroup)}>
      <label htmlFor="email" className={css(styles.label)}>
        Email:
      </label>
      <input id="email" name="email" type="email" data-testid="input-element" /> {/* ✅ Fixed */}
    </div>
    <div className={css(styles.inputGroup)}>
      <label htmlFor="password" className={css(styles.label)}>
        Password:
      </label>
      <input id="password" name="password" type="password" data-testid="input-element" /> {/* ✅ Fixed */}
    </div>
    <button className={css(styles.button)}>OK</button>
  </div>
);

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
