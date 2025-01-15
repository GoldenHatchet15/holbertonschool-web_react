import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import {getLatestNotification} from '../utils';
import NotificationItem from './NotificationItem.js';

export const Notifications = () => {
    const handelClose = () => {
        console.log('Close button has been clicked')
    }
    
    const buttonStyle = {
        display: 'inline-block',
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 0,
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        };
    return <div className="Notifications">
        <button aria-label='close' style={buttonStyle} onClick={handelClose}><img src={close_icon} alt="" style={{ width: '12px', height: '12px' }} /></button>
        <p className = "text">Here is the list of notifications</p>
        <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem
          type='urgent'
          html={{ __html: `${getLatestNotification()}` }}
        />
        </ul>
    </div>
}

export default Notifications;