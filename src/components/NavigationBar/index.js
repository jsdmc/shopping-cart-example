import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import style from './style.scss';

const NavigationBar = ({ className, selectedProductsCount }) => (
  <div className={classnames(style.container, className)}>
    <Link to="products">Products</Link>
    <span> | </span>
    <Link to="shopping-cart">
      {`Shopping cart (${selectedProductsCount})`}
    </Link>
  </div>
);

NavigationBar.propTypes = {
  className: PropTypes.string,
  selectedProductsCount: PropTypes.number
};

export default NavigationBar;
