import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { App } from '../app'
Enzyme.configure({ adapter: new Adapter() });


describe('<App/>', ()=> {
  it('fetches data from the server when component mounts', (done)=>{
    const mockedResponse = {
    "page": 1,
    "total_results": 19840,
    "results": [
        {
          "vote_count": 12,
          "id": 532321,
          "video": false,
          "vote_average": 4.7,
          "title": "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow",
          "popularity": 288.706,
          "poster_path": "/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
          "original_language": "ja",
          "original_title": "Re:ゼロから始める異世界生活 Memory Snow",
          }]
        };

    const mockJsonPromise = Promise.resolve(mockedResponse),
          mockFetchPromise = Promise.resolve({
            json: ()=> mockJsonPromise
          });

    jest.spyOn(global, 'fetch').mockImplementation(()=> mockFetchPromise);

    const wrapper = shallow(<App/>);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/movies/popular/movies');
    expect(wrapper.find('Nav')).toBeTruthy();

    done();
  });
});