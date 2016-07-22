import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from 'components/ShoppingCart';
import { removeProductFromCart } from 'redux-base/actions/shoppingCart';
import { getSelectedProducts } from 'redux-base/selectors/shoppingCart';

export const ShoppingCartPage = ({ dispatch, selectedProducts }) => (
  <div>
    <div>Shopping cart page</div>
    <ShoppingCart
      selectedProducts={selectedProducts}
      onRemoveFromCart={id => dispatch(removeProductFromCart(id))}
    />
  </div>
);

ShoppingCartPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedProducts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  selectedProducts: getSelectedProducts(state)
});

export default connect(mapStateToProps)(ShoppingCartPage);
