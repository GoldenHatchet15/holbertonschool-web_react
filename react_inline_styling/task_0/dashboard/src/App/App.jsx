import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/login.jsx'; // Add the .jsx extension
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList.jsx'; // Add the .jsx extension
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsData: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Meeting tomorrow at 10AM' },
        { id: 3, type: 'urgent', value: 'Your session will expire soon' },
      ],
    };
  }

  render() {
    const { isLoggedIn } = this.props;
    const { notificationsData } = this.state;

    return (
      <Fragment>
        <Notifications notifications={notificationsData} />
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
