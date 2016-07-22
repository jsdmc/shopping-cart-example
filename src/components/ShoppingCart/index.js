import React, { PropTypes } from 'react';
import BorderedList from 'components/base/BorderedList';
import CartItem from './CartItem';

import style from './style.scss';

const ShoppingCart = ({ selectedProducts = [], onRemoveFromCart }) => (
  <BorderedList className={style.container}>
    {selectedProducts.map((item, index) => (
      <CartItem key={index} {...{ ...item, onRemoveFromCart }} />
    ))}
  </BorderedList>
);

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default ShoppingCart;
