import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className, ...attrs }) => (
  <button
    className={className}
    onClick={onClick}
    {...attrs}>
      {children}
   </button>
);

Button.defaultProps = {
  children: 'default button',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;