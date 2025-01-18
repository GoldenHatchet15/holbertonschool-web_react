import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const App = () => {
  const notificationsData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'Meeting tomorrow at 10AM' },
    { id: 3, type: 'urgent', value: 'Your session will expire soon' },
  ];

  return (
    <Fragment>
      <Notifications notifications={notificationsData} />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
};

export default App;
