jest.unmock('./ReactDrawer.js');

import React from 'react';
import ReactDrawer from './ReactDrawer';
import { shallow } from 'enzyme';

describe('ReactDrawer', () => {

  it('should display an overlay and a drawer', () => {
    const wrapper = shallow(
      <ReactDrawer open />
    );
    expect(wrapper.find('.react-drawer-overlay').length).toBe(1);
    expect(wrapper.find('.react-drawer-drawer').length).toBe(1);
  });
  it('should onAnimationEnded change the state', () => {
    const wrapper = shallow(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    instance.state.open = false;
    instance.state.hiddenOverlay = false;
    instance.onAnimationEnded();
    expect(instance.state.hiddenOverlay).toBe(true);
  });
  it('should componentWillMount set initial state from props', () => {
    let wrapper = shallow(
      <ReactDrawer open={false} />
    );
    let instance = wrapper.instance();
    expect(instance.state.open).toBe(false);
    wrapper = shallow(
      <ReactDrawer open />
    );
    instance = wrapper.instance();
    expect(instance.state.open).toBe(true);
    expect(instance.state.hiddenOverlay).toBe(true);
    expect(instance.state.hiddenDrawer).toBe(true);
  });
  it('should toggleDrawer set some state', () => {
    const wrapper = shallow(
      <ReactDrawer open={false} />
    );
    const instance = wrapper.instance();
    instance.toggleDrawer();
    expect(instance.state.hiddenOverlay).toBe(false);
    expect(instance.state.hiddenDrawer).toBe(false);
  });
  it('should componentWillReceiveProps set some state', () => {
    const wrapper = shallow(
      <ReactDrawer open={false} />
    );
    const instance = wrapper.instance();
    const nextProps = {
      open: true
    };
    expect(instance.state.open).toBe(false);
    instance.componentWillReceiveProps(nextProps);
    expect(instance.state.open).toBe(true);
  });
});
