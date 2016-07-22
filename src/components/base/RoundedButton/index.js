import React, { PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.scss';

const RoundedButton = ({ className, children, ...props }) => (
  <button
    className={classnames(style.container, className)}
    {...props}
  >
    {children}
  </button>
);

RoundedButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default RoundedButton;
