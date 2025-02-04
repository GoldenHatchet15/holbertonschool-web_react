import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../Context/context';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    height: '50px',
    marginRight: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
  },
  logoutSection: {
    fontSize: '1rem',
    cursor: 'pointer',
    color: 'blue',
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header)}>
        <div>
          <img src={logo} alt="Holberton logo" className={css(styles.logo)} />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        
        {user.isLoggedIn && (
          <div
            id="logoutSection"
            className={css(styles.logoutSection)}
            onClick={logOut}
            data-testid="logout-section"
          >
            Welcome {user.email} (<span>logout</span>)
          </div>
        )}
      </header>
    );
  }
}

export default Header;
