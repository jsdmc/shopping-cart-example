import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';
import CartItem from 'components/ShoppingCart/CartItem';
import RoundedButton from 'components/base/RoundedButton';
import noop from 'lodash/noop';

import style from 'components/ShoppingCart/CartItem/style.scss';

describe('<CartItem />', () => {

  const setup = (props) => {
    const wrapper = mount(
      <CartItem
          id={1}
          title="testTitle"
          selectedCount={23}
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

    expect(wrapper.find('.' + style.container).length).toEqual(1);
  });

  it('should apply specified className', () => {
    const testClassName = 'testClassName';
    const { wrapper } = setup({ className: testClassName });

    expect(wrapper.find(`.${style.container}.${testClassName}`).length).toEqual(1);
  });

  it('should render title', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.' + style.title).prop('children')).toEqual('testTitle');
  });


  it('should render selectedCount', () => {
    const { wrapper } = setup({ selectedCount: 7 });

    expect(wrapper.find('.' + style.selectedCount).prop('children').join('')).toEqual('Count(7)');
  });

  it('should render "Remove from cart" button', () => {
    const { wrapper } = setup();

    expect(wrapper.find(RoundedButton).length).toEqual(1);
  });

  it('shoud call onRemoveFromCart when clicked on button', () => {
    const spyOnRemoveFromCart = expect.createSpy();

    const { wrapper } = setup({
      id: 13,
      onRemoveFromCart: spyOnRemoveFromCart
    });

    const btn = wrapper.find(RoundedButton);
    btn.simulate('click')

    expect(spyOnRemoveFromCart).toHaveBeenCalledWith(13);
  });
});
