import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import BorderedList from 'components/base/BorderedList';

import style from 'components/base/BorderedList/style.scss';

describe('<BorderedList />', () => {

  const setup = (props) => {
    const wrapper = mount(
      <BorderedList {...props}>
        <button />
        <button />
        <button />
      </BorderedList>
    );
    return {
      wrapper
    };
  };

  it('should be rendered', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.' + style.list).length).toEqual(1);
  });

  it('should apply specified className', () => {
    const testClassName = 'testClassName';
    const { wrapper } = setup({ className: testClassName });

    expect(wrapper.find(`.${style.list}.${testClassName}`).length).toEqual(1);
  });

  it('should render children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('button').length).toEqual(3);
  });

  it('should add listItem class to each child', () => {
    const { wrapper } = setup();

    wrapper.find('button').forEach(c => {
      expect(c.prop('className')).toEqual(style.listItem);
    });
  });

});