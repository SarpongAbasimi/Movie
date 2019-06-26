import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Nav } from '../components/nav';
Enzyme.configure({ adapter: new Adapter() });

describe('<Nav/>', ()=> {
  it('It Has a length of one', ()=> {
     const wrapper = shallow(<Nav/>)
     expect(wrapper.find('.navbar')).toHaveLength(1)
  });

  it('contains 3 movie links inside of it', ()=>{
     const wrapper = shallow(<Nav/>)
     expect(wrapper.find('.movies').children()).toHaveLength(4)
  })

  it(' contains links to login and signup page', ()=>{
    const wrapper = shallow(<Nav/>)
    expect(wrapper.find('.register').children()).toHaveLength(2)
  });
});

