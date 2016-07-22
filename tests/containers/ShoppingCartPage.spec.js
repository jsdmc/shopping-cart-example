import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import createStore from 'redux-base/configureStore';
import { Provider } from 'react-redux';
import { ShoppingCart } from 'components';
import ShoppingCartPage, { ShoppingCartPage as Stateless } from 'containers/ShoppingCartPage';
import { getSelectedProducts } from 'redux-base/selectors/shoppingCart';

describe('<ShoppingCartPage />', () => {

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
        <ShoppingCartPage {...props} />
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


  it('should pass selectedProducts to ShoppingCart', () => {
    const { wrapper, globalState } = setup();

    const actualCount = wrapper.find(ShoppingCart).prop('selectedProducts');
    const expectedCount = getSelectedProducts(globalState);
    expect(actualCount).toEqual(expectedCount);
  });

  it('should pass onRemoveFromCart(bounded to disaptch) to ShoppingCart', () => {
    const { wrapper, store } = setup();

    const onRemoveFromCart = wrapper.find(ShoppingCart).prop('onRemoveFromCart');

    onRemoveFromCart(4);

    const expectedSelectedProductIds = [4,2];
    const actualSelectedProductIds = store.getState().shoppingCart.selectedProductIds;

    expect(actualSelectedProductIds).toEqual(expectedSelectedProductIds);
  });

});