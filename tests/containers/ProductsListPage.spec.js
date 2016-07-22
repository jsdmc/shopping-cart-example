import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import createStore from 'redux-base/configureStore';
import { Provider } from 'react-redux';
import { ProductsList } from 'components';
import ProductsListPage, { ProductsListPage as Stateless } from 'containers/ProductsListPage';
import { getProducts } from 'redux-base/selectors/productsList';

describe('<ProductsListPage />', () => {

  const setup = (props) => {

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
    const store = createStore(globalState);

    const wrapper = mount(
      <Provider store={store}>
        <ProductsListPage {...props} />
      </Provider>
    );
    return {
      wrapper,
      store,
      globalState
    };
  };

  it('should be rendered', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Stateless).length).toEqual(1);
  });


  it('should pass list of products to ProductsList', () => {
    const { wrapper, globalState } = setup();

    const actualProducts = wrapper.find(ProductsList).prop('products');
    const expectedProducts = getProducts(globalState);
    expect(actualProducts).toEqual(expectedProducts);
  });

  it('should pass onAddToCart(bounded to disaptch) to ProductsList', () => {
    const { wrapper, store } = setup();

    const onAddToCart = wrapper.find(ProductsList).prop('onAddToCart');

    onAddToCart(2);

    const expectedSelectedProductIds = [4,2,4,2];
    const actualSelectedProductIds = store.getState().shoppingCart.selectedProductIds;

    expect(actualSelectedProductIds).toEqual(expectedSelectedProductIds);
  });

});