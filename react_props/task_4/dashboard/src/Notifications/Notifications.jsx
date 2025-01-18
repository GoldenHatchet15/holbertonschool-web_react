import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ notifications }) {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} data-notification-type={notif.type}>
            {notif.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Notifications;
