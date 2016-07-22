import expect from 'expect';
import shoppingCart, { initialState } from 'redux-base/reducers/shoppingCart';
import { addProductToCart, removeProductFromCart } from 'redux-base/actions/shoppingCart';

describe('shoppingCart reducer', () => {

  const testCase = (state, action, expectedState) => [state, action, expectedState];

  const check = (state, action, expectedState) => {
    const actualState = shoppingCart(state, action);

    expect(actualState).toEqual(expectedState);
  };


  it('should handle initial state', () => {
    const actualState = shoppingCart(undefined, {});

    expect(actualState).toEqual(initialState);
  });

  it('should handle ADD_PRODUCT_TO_CART action', () => {
    [
      testCase(
        { selectedProductIds: [] },
        addProductToCart(7),
        { selectedProductIds: [7] },
      ),
      testCase(
        { selectedProductIds: [2,4] },
        addProductToCart(3),
        { selectedProductIds: [2,4,3] },
      ),
      testCase(
        { selectedProductIds: [1] },
        addProductToCart(2),
        { selectedProductIds: [1,2] },
      )
    ].forEach(test => check.apply(null, test));
  });


  it('should handle REMOVE_PRODUCT_FROM_CART action', () => {
    [
      testCase(
        { selectedProductIds: [] },
        removeProductFromCart(3),
        { selectedProductIds: [] },
      ),
      testCase(
        { selectedProductIds: [2,4] },
        removeProductFromCart(3),
        { selectedProductIds: [2,4] },
      ),
      testCase(
        { selectedProductIds: [1,2,3] },
        removeProductFromCart(1),
        { selectedProductIds: [2,3] },
      ),
      testCase(
        { selectedProductIds: [1,1,2,3] },
        removeProductFromCart(1),
        { selectedProductIds: [1,2,3] },
      ),
      testCase(
        { selectedProductIds: [1,2,2,3] },
        removeProductFromCart(2),
        { selectedProductIds: [1,2,3] },
      ),
      testCase(
        { selectedProductIds: [1,2,3,3] },
        removeProductFromCart(3),
        { selectedProductIds: [1,2,3] },
      )
    ].forEach(test => check.apply(null, test));
  });

  it('should handle default action', () => {
    [
      testCase(
        { selectedProductIds: [2,4,6] },
        { type: 'UNKNOWN_ACTION' },
        { selectedProductIds: [2,4,6] },
      )
    ].forEach(test => check.apply(null, test));
  });
});
