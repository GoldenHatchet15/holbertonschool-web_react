import React, { Component, Fragment } from 'react';
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

export default App;
