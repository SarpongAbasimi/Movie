import React from 'react';
import  { TvShow } from '../components/tvshows';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<TvShow />', ()=> {
  it('renders say hello', ()=>{

    let myMock = jest.fn(()=> Promise.resolve({ data: [ 'LoveIsand', 'Power rangers']}))
    jest.spyOn( global, 'fetch').mockImplementation(myMock)

    const wrapper = shallow(< TvShow />)
    expect(wrapper.text()).toEqual('Hllo')
    expect(global.fetch).toHaveBeenNthCalledWith(1,'https://jsonplaceholder.typicode.com/todos/1')

  })
})