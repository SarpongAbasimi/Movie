import React from 'react';
import  { TvShow } from '../components/tvshows';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<TvShow />', ()=> {
  it('renders say hello', ()=>{
    const mockedPromise = () => Promise.resolve({ data: [ 'LoveIsand', 'Power rangers'] })

    let myMock = jest.fn(()=> Promise.resolve({ json: ()=> mockedPromise }));

    jest.spyOn( global, 'fetch').mockImplementation(myMock)

    const wrapper = shallow(< TvShow />)
    expect(wrapper.text()).toEqual('Hllo')
    expect(global.fetch).toHaveBeenNthCalledWith(1,'/api/movies/tvshows/movies')

  })
})