import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    fontSize: '16px',
    padding: '10px 8px',
    borderBottom: '1px solid #ccc',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      width: '100%',
    },
  },
  urgent: {
    color: 'red',
    fontSize: '16px',
    padding: '10px 8px',
    borderBottom: '1px solid #000',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      width: '100%',
    },
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <li
        className={css(type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        {...(html ? { dangerouslySetInnerHTML: html } : { children: value })}
      ></li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;
