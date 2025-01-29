import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
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
});

const Header = () => (
  <header className={css(styles.header)}>
    <img src={logo} alt="Holberton logo" className={css(styles.logo)} />
    <h1 className={css(styles.title)}>School dashboard</h1>
  </header>
);

export default Header;
