/*eslint no-unused-vars: ["error", {varsIgnorePattern: "React[Drawer]*"}]*/
import React from 'react';
import ReactDrawer from './ReactDrawer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ReactDrawer', () => {

  it('should display an overlay and a drawer', () => {
    const wrapper = mount(
      <ReactDrawer open />
    );
    expect(wrapper.find('.react-drawer-overlay').length).toBe(1);
    expect(wrapper.find('.react-drawer-drawer').length).toBe(1);
  });

  it('with noOverlay should display a drawer', () => {
    const wrapper = mount(
      <ReactDrawer open noOverlay />
    );
    expect(wrapper.find('.react-drawer-overlay').length).toBe(0);
    expect(wrapper.find('.react-drawer-drawer').length).toBe(1);
  });

  it('should onAnimationEnded change the state', () => {
    const wrapper = mount(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    instance.state.open = false;
    instance.state.hiddenOverlay = false;
    instance.onAnimationEnded();
    expect(instance.state.hiddenOverlay).toBe(true);
  });

  it('should componentWillMount set initial state from props', () => {
    let wrapper = mount(
      <ReactDrawer open={false} />
    );
    let instance = wrapper.instance();
    expect(instance.state.open).toBe(false);
    wrapper = mount(
      <ReactDrawer open />
    );
    instance = wrapper.instance();
    expect(instance.state.open).toBe(true);
    expect(instance.state.hiddenOverlay).toBe(true);
    expect(instance.state.hiddenDrawer).toBe(true);
  });

  it('should closeDrawer set some state', () => {
    const wrapper = mount(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    expect(instance.state.open).toBe(true);
    instance.closeDrawer();
    expect(instance.state.open).toBe(false);
  });

  it('should closeDrawer call onClose', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <ReactDrawer open onClose={onClose}/>
    );
    const instance = wrapper.instance();
    expect(onClose.mock.calls.length).toBe(0);
    instance.closeDrawer();
    expect(onClose.mock.calls.length).toBe(1);
  });

  it('should openDrawer set some state', () => {
    const wrapper = mount(
      <ReactDrawer open={false} />
    );
    const instance = wrapper.instance();
    instance.openDrawer();
    expect(instance.state.hiddenOverlay).toBe(false);
    expect(instance.state.hiddenDrawer).toBe(false);
    expect(instance.state.open).toBe(true);
  });

  it('should componentWillReceiveProps call openDrawer/closeDrawer', () => {
    const wrapper = mount(
      <ReactDrawer open={false} />
    );
    const instance = wrapper.instance();
    expect(instance.state.open).toBe(false);
    instance.openDrawer = jest.fn();
    instance.closeDrawer = jest.fn();
    instance.componentWillReceiveProps({open: true});
    expect(instance.openDrawer.mock.calls.length).toBe(1);
    expect(instance.closeDrawer.mock.calls.length).toBe(0);
    // now lets close it
    instance.state.open = true;
    instance.componentWillReceiveProps({open: false});
    expect(instance.closeDrawer.mock.calls.length).toBe(1);
  });

  it('should componentDidMount add an event listener', () => {
    const wrapper = mount(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    instance.drawer = {
      addEventListener: jest.fn()
    };
    instance.componentDidMount();
    const calls = instance.drawer.addEventListener.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0].length).toBe(2);
    expect(calls[0][0]).toBe('webkitAnimationEnd');
    expect(calls[0][1]).toBe(instance.onAnimationEnded);
  });

  it('should componentWillUnmount remove an event listener', () => {
    const wrapper = mount(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    instance.drawer = {
      removeEventListener: jest.fn()
    };
    instance.componentWillUnmount();
    const calls = instance.drawer.removeEventListener.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0].length).toBe(2);
    expect(calls[0][0]).toBe('webkitAnimationEnd');
    expect(calls[0][1]).toBe(instance.onAnimationEnded);
  });

  it('should getOverlayClassName return class', () => {
    const theme = {
      overlay: 'test-overlay',
      hidden: 'test-hidden'
    };
    const animate = {
      'fadeIn': 'test-fadeIn',
      'fadeOut': 'test-fadeOut'
    };
    const wrapper = mount(
      <ReactDrawer open />
    );
    const instance = wrapper.instance();
    let c = instance.getOverlayClassName(theme, animate).split(' ');
    expect(c.length).toBe(4);
    expect(c.indexOf('react-drawer-overlay')).not.toBe(-1);
    expect(c.indexOf('test-overlay')).not.toBe(-1);
    expect(c.indexOf('test-fadeIn')).not.toBe(-1);
    expect(c.indexOf('test-hidden')).not.toBe(-1);

    instance.state.open = false;
    c = instance.getOverlayClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeIn')).toBe(-1);
    expect(c.indexOf('test-fadeOut')).not.toBe(-1);

    instance.state.hiddenOverlay = false;
    c = instance.getOverlayClassName(theme, animate).split(' ');
    expect(c.indexOf('test-hidden')).toBe(-1);
  });

  it('should getDrawerClassName return class', () => {
    const theme = {
      drawer: 'test-drawer',
      'drawer-top': 'test-drawer-top',
      'drawer-bottom': 'test-drawer-bottom',
      'drawer-left': 'test-drawer-left',
      'drawer-right': 'test-drawer-right',
      hidden: 'test-hidden'
    };
    const animate = {
      'fadeInUp': 'test-fadeInUp',
      'fadeInDown': 'test-fadeInDown',
      'fadeInLeft': 'test-fadeInLeft',
      'fadeInRight': 'test-fadeInRight',
      'fadeOutUp': 'test-fadeOutUp',
      'fadeOutDown': 'test-fadeOutDown',
      'fadeOutLeft': 'test-fadeOutLeft',
      'fadeOutRight': 'test-fadeOutRight'
    };
    const wrapper = mount(
      <ReactDrawer open />
    );
    let instance = wrapper.instance();
    let c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.length).toBe(5);
    expect(c.indexOf('react-drawer-drawer')).not.toBe(-1);
    expect(c.indexOf('test-drawer')).not.toBe(-1);
    expect(c.indexOf('test-hidden')).not.toBe(-1);
    expect(c.indexOf('test-fadeInUp')).toBe(-1);
    expect(c.indexOf('test-fadeInRight')).not.toBe(-1);
    expect(c.indexOf('test-fadeInDown')).toBe(-1);
    expect(c.indexOf('test-fadeInLeft')).toBe(-1);

    wrapper.setProps({position: 'top'});
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeInUp')).toBe(-1);
    expect(c.indexOf('test-fadeInRight')).toBe(-1);
    expect(c.indexOf('test-fadeInDown')).not.toBe(-1);
    expect(c.indexOf('test-fadeInLeft')).toBe(-1);

    wrapper.setProps({position: 'bottom'});
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeInUp')).not.toBe(-1);
    expect(c.indexOf('test-fadeInRight')).toBe(-1);
    expect(c.indexOf('test-fadeInDown')).toBe(-1);
    expect(c.indexOf('test-fadeInLeft')).toBe(-1);

    wrapper.setProps({position: 'left'});
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeInUp')).toBe(-1);
    expect(c.indexOf('test-fadeInRight')).toBe(-1);
    expect(c.indexOf('test-fadeInDown')).toBe(-1);
    expect(c.indexOf('test-fadeInLeft')).not.toBe(-1);


    wrapper.setProps({position: 'right'});
    instance = wrapper.instance();
    instance.state.open = false;
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('react-drawer-drawer')).not.toBe(-1);
    expect(c.indexOf('test-drawer')).not.toBe(-1);
    expect(c.indexOf('test-fadeOutUp')).toBe(-1);
    expect(c.indexOf('test-fadeOutRight')).not.toBe(-1);
    expect(c.indexOf('test-fadeOutDown')).toBe(-1);
    expect(c.indexOf('test-fadeOutLeft')).toBe(-1);

    wrapper.setProps({position: 'top'});
    instance = wrapper.instance();
    instance.state.open = false;
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeOutUp')).not.toBe(-1);
    expect(c.indexOf('test-fadeOutRight')).toBe(-1);
    expect(c.indexOf('test-fadeOutDown')).toBe(-1);
    expect(c.indexOf('test-fadeOutLeft')).toBe(-1);

    wrapper.setProps({position: 'bottom'});
    instance = wrapper.instance();
    instance.state.open = false;
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeOutUp')).toBe(-1);
    expect(c.indexOf('test-fadeOutRight')).toBe(-1);
    expect(c.indexOf('test-fadeOutDown')).not.toBe(-1);
    expect(c.indexOf('test-fadeOutLeft')).toBe(-1);

    wrapper.setProps({position: 'left'});
    instance = wrapper.instance();
    instance.state.open = false;
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-fadeOutUp')).toBe(-1);
    expect(c.indexOf('test-fadeOutRight')).toBe(-1);
    expect(c.indexOf('test-fadeOutDown')).toBe(-1);
    expect(c.indexOf('test-fadeOutLeft')).not.toBe(-1);


    instance.state.hiddenDrawer = false;
    c = instance.getDrawerClassName(theme, animate).split(' ');
    expect(c.indexOf('test-hidden')).toBe(-1);
  });
});
