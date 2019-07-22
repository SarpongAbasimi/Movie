import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Discover } from '../components/discover';
Enzyme.configure({ adapter: new Adapter() });

describe('<Discover/>', ()=>{
  it('displays discover on the page', ()=>{
    const wrapper = shallow(<Discover/>)
    expect(wrapper.find('.container')).toHaveLength(1)
  })
});
