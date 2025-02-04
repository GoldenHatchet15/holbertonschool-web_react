import React, { Component, Fragment } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
      notificationsData: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "Meeting tomorrow at 10AM" },
        { id: 3, type: "urgent", value: "Your session will expire soon" },
      ],
      displayDrawer: false,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { user, logOut, notificationsData, displayDrawer } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Fragment>
          <Notifications
            displayDrawer={displayDrawer}
            notifications={notificationsData}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <div className={css(styles.appBody)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySection>
          </div>
          <footer className={css(styles.appFooter)}>
            <p>&copy; {new Date().getFullYear()} Holberton School</p>
          </footer>
        </Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
