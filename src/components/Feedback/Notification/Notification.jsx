import React from 'react';
import PropTypes from 'prop-types';

function Notification({message}) {

  return (
    <span>{message}</span>
  );
}
 Notification.propTypes = {
  message: PropTypes.string.isRequired
};
export default Notification;
