export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const addProductToCart = id => ({
  type: ADD_PRODUCT_TO_CART,
  id
});

export const removeProductFromCart = id => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id
});
