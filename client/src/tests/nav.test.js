import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Nav } from '../components/nav';
Enzyme.configure({ adapter: new Adapter() });

describe('<Nav/>', ()=> {
  it('should render hello on the home page', ()=> {
    const wrapper = shallow(<Nav/>)
    expect(wrapper.find('span').text()).toEqual('hello')
  });
});
