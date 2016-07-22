import React, { PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.scss';

const BorderedList = ({ className, children }) => (
  <div className={classnames(style.list, className)}>
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        key: index,
        className: classnames(child.props.className, style.listItem)
      })
    ))}
  </div>
);

BorderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default BorderedList;
