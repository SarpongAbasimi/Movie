import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Nav } from '../components/nav';
Enzyme.configure({ adapter: new Adapter() });

describe('<Nav/>', ()=> {
  it('It Has a length of one', ()=> {
    const navLinks = [
        {id: 1, type: "DISCOVER"},
        {id: 2, type: "MOVIES"},
        {id: 3, type: "TV SHOWS"},
        {id: 4, type: "LOGIN"},
        {id: 5, type: "SIGN UP"},
      ],
     wrapper = shallow(<Nav link={ navLinks }/>)
     expect(wrapper.find('.navbar')).toHaveLength(1)
  });

  it('contains name to link inside of it', ()=>{
    const navLinks = [
        {id: 1, type: "DISCOVER"},
        {id: 2, type: "MOVIES"},
        {id: 3, type: "TV SHOWS"},
        {id: 4, type: "LOGIN"},
        {id: 5, type: "SIGN UP"},
      ],
     wrapper = shallow(<Nav link={ navLinks }/>)

     const links = wrapper.find('.navBarLink').map(node => node.text());
     expect(links).toEqual(['DISCOVER', 'MOVIES', 'TV SHOWS', 'LOGIN', 'SIGN UP']);
  })
});

