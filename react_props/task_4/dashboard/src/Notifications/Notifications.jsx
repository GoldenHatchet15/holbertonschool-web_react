import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const Notifications = ({ displayDrawer = false, notifications = [] }) => (
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
              <li key={notif.id} data-notification-type={notif.type}>
                {notif.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </div>
);

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

export default Notifications;
