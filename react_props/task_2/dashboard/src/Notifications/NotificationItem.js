
import React from 'react';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
  if (type && value) {
      return <li data-priority={type}>{value}</li>;
  }
  return <li data-priority={type} dangerouslySetInnerHTML={html}></li>;
}

export default NotificationItem;