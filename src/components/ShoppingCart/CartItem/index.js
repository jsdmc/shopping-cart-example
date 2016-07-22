import React, { PropTypes } from 'react';
import RoundedButton from 'components/base/RoundedButton';
import classnames from 'classnames';

import style from './style.scss';

const CartItem = ({ className, id, title, selectedCount, onRemoveFromCart }) => (
  <div className={classnames(style.container, className)}>
    <span className={style.title}>{ title }</span>
    <span className={style.selectedCount}>Count({selectedCount})</span>
    <RoundedButton
      className={style.removeFromCartBtn}
      onClick={() => onRemoveFromCart(id)}
    >
      X
    </RoundedButton>
  </div>
);

CartItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectedCount: PropTypes.number.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default CartItem;
