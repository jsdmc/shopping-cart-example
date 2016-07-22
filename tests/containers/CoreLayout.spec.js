import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import createStore from 'redux-base/configureStore';
import { Provider } from 'react-redux';
import CoreLayout, { CoreLayout as Stateless } from 'containers/CoreLayout';
import { NavigationBar } from 'components';
import { getSelectedProductsCount } from 'redux-base/selectors/shoppingCart';

import style from 'containers/CoreLayout/style.scss';

describe('<CoreLayout />', () => {

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
        <CoreLayout {...props} />
      </Provider>
    );
    return {
      wrapper,
      globalState
    };
  };

  it('should be rendered', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Stateless).length).toEqual(1);
  });

  it('should render childred', () => {
    const { wrapper } = setup({ children: <div className="testChild"></div>});

    expect(wrapper.find('.testChild').length).toEqual(1);
  });

  it('should pass selectedProductsCount to NavigationBar', () => {
    const { wrapper, globalState } = setup();

    const actualCount = wrapper.find(NavigationBar).prop('selectedProductsCount');
    const expectedCount = getSelectedProductsCount(globalState);
    expect(actualCount).toEqual(expectedCount);
  });

});