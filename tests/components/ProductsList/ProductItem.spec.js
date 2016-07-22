import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';
import ProductItem from 'components/ProductsList/ProductItem';
import RoundedButton from 'components/base/RoundedButton';
import noop from 'lodash/noop';

import style from 'components/ProductsList/ProductItem/style.scss';

describe('<ProductItem />', () => {

  const setup = (props) => {
    const wrapper = mount(
      <ProductItem
          id={1}
          title="testTitle"
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

  it('should render "Add to cart" button', () => {
    const { wrapper } = setup();

    expect(wrapper.find(RoundedButton).length).toEqual(1);
  });

  it('shoud call onAddToCart when clicked on button', () => {
    const spyOnAddToCart = expect.createSpy();

    const { wrapper } = setup({
      id: 13,
      onAddToCart: spyOnAddToCart
    });

    const btn = wrapper.find(RoundedButton);
    btn.simulate('click')

    expect(spyOnAddToCart).toHaveBeenCalledWith(13);
  });
});
