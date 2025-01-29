import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";

const styles = StyleSheet.create({
  notifications: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: "none",
  },
  closeButton: {
    position: "absolute",
    right: "10px",
    top: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
  menuItem: {
    cursor: "pointer",
  },
});

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, notifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              X
            </button>
            <p>Here is the list of notifications:</p>
            <ul className={css(styles.ul)}>
              {notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  id={notif.id}
                  markAsRead={() => this.markAsRead(notif.id)} // Pass the function here
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
