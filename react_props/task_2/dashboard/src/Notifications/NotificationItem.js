import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, value, html } = this.props;

    // Render HTML content if the html prop is provided
    if (html) {
      return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
    }

    // Render text content otherwise
    return <li data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;
