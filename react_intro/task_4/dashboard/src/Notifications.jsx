import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';
import closeIcon from './assets/close-button.png'; // Make sure the path is correct

function Notifications() {
  return (
    <div className="Notifications">
      <button className="close-button" aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li className="item default-priority">New course available</li>
        <li className="item urgent-priority">New resume available</li>
        <li className="item urgent-priority" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
