import React, { useState, useEffect, Fragment } from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import AppContext, { defaultUser } from "../Context/context";

const styles = StyleSheet.create({
  appBody: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  appFooter: {
    textAlign: "center",
    padding: "1rem",
    borderTop: "1px solid #ccc",
  },
});

const App = () => {
  // ✅ Convert state to useState hooks
  const [user, setUser] = useState(defaultUser);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "Meeting tomorrow at 10AM" },
    { id: 3, type: "urgent", value: "Your session will expire soon" },
  ]);
  const [displayDrawer, setDisplayDrawer] = useState(false);

  // ✅ Functional `logIn` method
  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  // ✅ Functional `logOut` method
  const logOut = () => {
    setUser(defaultUser);
  };

  const markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <Fragment>
        <Notifications
          displayDrawer={displayDrawer}
          notifications={notifications}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
        <Header />
        <div className={css(styles.appBody)}>
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>
        <Footer />
      </Fragment>
    </AppContext.Provider>
  );
};

export default App;
