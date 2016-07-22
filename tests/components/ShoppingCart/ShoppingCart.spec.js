import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';
import { ShoppingCart } from 'components';
import CartItem from 'components/ShoppingCart/CartItem';
import BorderedList from 'components/base/BorderedList';
import noop from 'lodash/noop';

describe('<ShoppingCart />', () => {

  const setup = (props) => {
    const wrapper = mount(
      <ShoppingCart
          selectedProducts={[]}
          onRemoveFromCart={noop}
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
      selectedProducts: [
        { id: 1, title: 'testTitle1', selectedCount: 2 },
        { id: 2, title: 'testTitle2', selectedCount: 2 },
        { id: 3, title: 'testTitle3', selectedCount: 2 }
      ]
    });

    expect(wrapper.find(CartItem).length).toEqual(3);
  });

  it('shoud pass product props to CartItem', () => {
    const item = { id: 1, title: 'testTitle', selectedCount: 2 };
    const { wrapper } = setup({
      selectedProducts: [item]
    });

    const { onRemoveFromCart, className, ...actualProps } = wrapper.find(CartItem).props();
    expect(actualProps).toEqual(item);
  });

  it('shoud pass onRemoveFromCart to CartItem', () => {
    const onRemoveFromCart = noop;
    const { wrapper } = setup({
      selectedProducts: [{ id: 1, title: 'testTitle', selectedCount: 2 }],
      onRemoveFromCart
    });

    expect(wrapper.find(CartItem).prop('onRemoveFromCart')).toEqual(onRemoveFromCart);
  });
});
