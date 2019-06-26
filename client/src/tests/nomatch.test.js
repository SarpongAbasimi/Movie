import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { NoMatch } from '../../src/components/nomatch';
Enzyme.configure({ adapter: new Adapter() });

describe('< NoMatch/>', ()=>{
  it('it renders if no component is matched by the router', ()=>{
    const wrapper = shallow(< NoMatch/>);
    expect(wrapper.find('.container-wrapper')).toHaveLength(1);
  });

  it('contains an error message', ()=>{
    const wrapper = shallow(<NoMatch/>);
    console.log(wrapper.debug())
    expect(wrapper.contains(
      <div className='container-wrapper'>
        <h1>Sorry, we can't find the page you're looking for </h1>
      </div>
    )).toEqual(true)
  });
});