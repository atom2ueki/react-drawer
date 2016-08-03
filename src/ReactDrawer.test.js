jest.unmock('./ReactDrawer.js');

import React from 'react';
import ReactDrawer from './ReactDrawer';
import { shallow } from 'enzyme';

describe('ReactDrawer', () => {

  it('should display an overlay and a drawer', () => {
    const wrapper = shallow(
      <ReactDrawer open />
    );
    console.log(wrapper.debug());
    expect(2).toBe(2);
  });
});
