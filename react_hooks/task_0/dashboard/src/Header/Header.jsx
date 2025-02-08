import React, { useContext } from 'react';
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

const Header = () => {
  // ✅ useContext MUST be inside the function component
  const { user, logOut } = useContext(AppContext);

  console.log('User context:', user); // ✅ Now inside function
  console.log('Logout function:', logOut);

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
};

export default Header;
