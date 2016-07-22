import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../actions/shoppingCart';

export const initialState = {
  selectedProductIds: []
};

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        selectedProductIds: state.selectedProductIds.concat(action.id)
      };
    case REMOVE_PRODUCT_FROM_CART: {
      const selectedIds = state.selectedProductIds.slice();
      const indexOfItemToRemove = selectedIds.lastIndexOf(action.id);
      if (indexOfItemToRemove !== -1) {
        selectedIds.splice(indexOfItemToRemove, 1);
      }
      return {
        ...state,
        selectedProductIds: selectedIds
      };
    }
    default:
      return state;
  }
}
