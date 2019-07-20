import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ className, children, ...attr }) => (
  <div className={className} {...attr}>
    {children}
  </div>
);

ButtonGroup.defaultProps = {
  className: '',
  children: null,
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonGroup;