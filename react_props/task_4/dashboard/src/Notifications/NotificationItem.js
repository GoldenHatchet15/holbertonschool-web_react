
import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
}


function NotificationItem({ type, html, value }) {
  if (type && value) {
      return <li data-priority={type}>{value}</li>;
  }
  return <li data-priority={type} dangerouslySetInnerHTML={html}></li>;
}

export default NotificationItem;