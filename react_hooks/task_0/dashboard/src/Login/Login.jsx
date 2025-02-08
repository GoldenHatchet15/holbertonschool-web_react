import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  };

  handleChangePassword = (event) => {
    const password = event.target.value;
    this.setState({ password }, this.validateForm);
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 8;
    this.setState({ enableSubmit: isEmailValid && isPasswordValid });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password); // Call logIn from props
  };

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit} role="form" data-testid="login-form">
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email" className={css(styles.label)}>
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChangeEmail}
              data-testid="input-element"
            />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password" className={css(styles.label)}>
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChangePassword}
              data-testid="input-element"
            />
          </div>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
