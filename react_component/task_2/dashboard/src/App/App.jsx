import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

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

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { notificationsData } = this.state;

    return (
      <Fragment>
        <Notifications notifications={notificationsData} />
        <Header />
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

// Prop validation
App.propTypes = {
  logOut: PropTypes.func, // Validate that logOut is a function
};

// Default props
App.defaultProps = {
  logOut: () => {}, // Default value if logOut is not passed
};

export default App;
