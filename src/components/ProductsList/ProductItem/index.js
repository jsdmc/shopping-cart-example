import React, { PropTypes } from 'react';
import RoundedButton from 'components/base/RoundedButton';
import classnames from 'classnames';

import style from './style.scss';

const ProductItem = ({ className, id, title, onAddToCart }) => (
  <div className={classnames(style.container, className)}>
    <span className={style.title}>{ title }</span>
    <RoundedButton
      className={style.addToCartBtn}
      onClick={() => onAddToCart(id)}
    >
      Add to cart
    </RoundedButton>
  </div>
);

ProductItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductItem;
