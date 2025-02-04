import React from 'react';

// Define default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define default logout function
export const defaultLogOut = () => {};

// Create and export the context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
