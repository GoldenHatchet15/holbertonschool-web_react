import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import {getLatestNotification} from '../utils';
import NotificationItem from './NotificationItem.js';
import PropTypes from 'prop-types';



export const Notifications = ({ displayDrawer }) => {
    const handelClose = () => {
        console.log('Close button has been clicked')
    }
    
    const buttonStyle = {
        display: 'inline-block',
        position: 'absolute',
        top: '35px',
        right: '20px',
        background: 0,
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        };
    if(displayDrawer){
        return(
        <div className="container">
            <div className="menuItem">
            <p>Your notifications</p>
            </div>
        <div className="Notifications">
        <button aria-label='close' style={buttonStyle} onClick={handelClose}><img src={close_icon} alt="" style={{ width: '12px', height: '12px' }} /></button>
        <p className = "text">Here is the list of notifications</p>
        <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem
          type='urgent'
          html={{ __html: `${getLatestNotification()}` }}/>
        </ul>
        </div>
        </div>)
    }
   
    else {
        return( <div className="menuItem" id="not">
            <p>Your notifications</p>
            </div>)
    }
       
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}

export default Notifications;