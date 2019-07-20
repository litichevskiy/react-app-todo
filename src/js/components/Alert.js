import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

Alert.defaultProps = {
  children: null,
};

Alert.propTypes = {
  children: PropTypes.node
};

export default Alert;