import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { App } from '../app'
Enzyme.configure({ adapter: new Adapter() });


describe('<App/>', ()=> {
  it('I dont know', ()=> {
    const wrapper = mount(<App/>)
    expect(wrapper.find('Nav')).toBeTruthy()
  });
});