import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

// Keyframes for animations
const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-5px)' },
  '50%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const fadeAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

// Styles
const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      fontSize: '20px',
      borderRadius: 0,
      overflowY: 'auto',
    },
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  closeButton: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    '@media (max-width: 900px)': {
      fontSize: '1.5rem',
    },
  },
  menuItem: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#fff8f8',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media (max-width: 900px)': {
      display: 'none', // Hide the menu item when the notifications are visible
    },
  },
  hidden: {
    display: 'none',
  },
});

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <div>
        <div
          className={css(displayDrawer ? styles.hidden : styles.menuItem)}
          onClick={() => console.log('Menu item clicked')}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => console.log('Close button clicked')}
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
                  markAsRead={() => this.markAsRead(notif.id)}
                  id={notif.id}
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
      html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
