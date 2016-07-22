import expect from 'expect';
import * as actions from 'redux-base/actions/shoppingCart';

describe('shopping cart actions', () => {
  it('addProductToCart should create ADD_PRODUCT_TO_CART action', () => {
    expect(actions.addProductToCart(11)).toEqual({
      type: 'ADD_PRODUCT_TO_CART',
      id: 11
    });
  });

  it('removeProductFromCart should create REMOVE_PRODUCT_FROM_CART action', () => {
    expect(actions.removeProductFromCart(12)).toEqual({
      type: 'REMOVE_PRODUCT_FROM_CART',
      id: 12
    });
  });

});
