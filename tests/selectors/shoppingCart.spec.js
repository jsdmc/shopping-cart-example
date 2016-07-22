import expect from 'expect';
import { getSelectedProductsCount, getSelectedProducts } from 'redux-base/selectors/shoppingCart';

describe('selectors for shoppingCart', () => {
  const globalState = {
    productsList: {
      items: [
        { id: 1, title: 'testTitle1' },
        { id: 2, title: 'testTitle2' },
        { id: 3, title: 'testTitle3' },
        { id: 4, title: 'testTitle4' }
      ]
    },
    shoppingCart: {
      selectedProductIds: [4, 2, 4]
    }
  };

  describe('getSelectedProductsCount', () => {
    it('should return number of selected products', () => {
      const actual = getSelectedProductsCount(globalState);
      const expected = globalState.shoppingCart.selectedProductIds.length;

      expect(actual).toEqual(expected);
    });
  });


  describe('getSelectedProducts', () => {
    it('should return list selected products with "selectedCount" prop for each item', () => {
      const actual = getSelectedProducts(globalState);
      const expected = [
        { id: 2, title: 'testTitle2', selectedCount: 1 },
        { id: 4, title: 'testTitle4', selectedCount: 2 }
      ];

      expect(actual).toEqual(expected);
    });
  });

});