import expect from 'expect';
import productsList, { initialState } from 'redux-base/reducers/productsList';

describe('productsList reducer', () => {
  it('should have products in initial state', () => {
    const actualState = productsList(undefined, {});

    expect(actualState).toEqual(initialState);
  });
});
