import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';
import { ProductsList } from 'components';
import ProductItem from 'components/ProductsList/ProductItem';
import BorderedList from 'components/base/BorderedList';
import noop from 'lodash/noop';

describe('<ProductsList />', () => {

  const setup = (props) => {
    const wrapper = mount(
      <ProductsList
          products={[]}
          onAddToCart={noop}
          {...props}
      />
    );
    return {
      wrapper
    };
  };

  it('should be rendered', () => {
    const { wrapper } = setup();

    expect(wrapper.find(BorderedList).length).toEqual(1);
  });

  it('should rendered passed products', () => {
    const { wrapper } = setup({
      products: [
        { id: 1, title: 'testTitle1' },
        { id: 2, title: 'testTitle2' },
        { id: 3, title: 'testTitle3' }
      ]
    });

    expect(wrapper.find(ProductItem).length).toEqual(3);
  });

  it('shoud pass product props to ProductItem', () => {
    const item = { id: 1, title: 'testTitle' };
    const { wrapper } = setup({
      products: [item]
    });

    const { onAddToCart, className, ...actualProps } = wrapper.find(ProductItem).props();
    expect(actualProps).toEqual(item);
  });

  it('shoud pass onAddToCart to ProductItem', () => {
    const onAddToCart = noop;
    const { wrapper } = setup({
      products: [{ id: 1, title: 'testTitle' }],
      onAddToCart
    });

    expect(wrapper.find(ProductItem).prop('onAddToCart')).toEqual(onAddToCart);
  });
});
