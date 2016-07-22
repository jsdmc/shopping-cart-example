import expect from 'expect';
import { getProducts } from 'redux-base/selectors/productsList';

describe('selectors for productsList', () => {
  const globalState = {
    productsList: {
      items: [
        { id: 1, title: 'testTitle1' },
        { id: 2, title: 'testTitle2' }
      ]
    }
  };

  describe('getProducts', () => {
    it('should return state slice with list of products', () => {
      const actual = getProducts(globalState);
      const expected = globalState.productsList.items;

      expect(actual).toEqual(expected);
    });
  });

});