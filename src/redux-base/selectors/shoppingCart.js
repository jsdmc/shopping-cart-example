import _groupBy from 'lodash/groupBy';

export const getSelectedProductsCount = state => state.shoppingCart.selectedProductIds.length;

export const getSelectedProducts = state => {
  const { selectedProductIds } = state.shoppingCart;
  const { items } = state.productsList;

  const selectedCountMap = _groupBy(selectedProductIds);

  return items
    .filter(item => selectedProductIds.includes(item.id))
    .map(item => ({ ...item, selectedCount: selectedCountMap[item.id].length }));
};
