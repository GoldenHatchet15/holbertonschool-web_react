import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <div>
        <div className="notifications-title">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                background: 'none',
                border: 'none',
              }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              X
            </button>
            <p>
              {notifications.length > 0
                ? 'Here is the list of notifications'
                : 'No new notification for now'}
            </p>
            {notifications.length > 0 && (
              <ul>
                {notifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    id={notif.id}
                    type={notif.type}
                    value={notif.value}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            )}
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
