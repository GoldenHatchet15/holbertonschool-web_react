import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList.js'
import PropTypes from 'prop-types';

App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn:false
}


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <div className="App">
    <Notifications/>
    </div>
        <Header/>
      {isLoggedIn && <CourseList/>}
      {!isLoggedIn && <Login/>}
      <Footer/>
    </React.Fragment>
  );
}

export default App;