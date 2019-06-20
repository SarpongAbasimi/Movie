import React from 'react';
import { MovieList } from '../components/movieList'
import PropTypes from 'prop-types';

export const Home = ({ movieListData, getDetail }) => {
  return(<MovieList movies={movieListData} movieDetail={getDetail} />);
};

Home.propTypes = {
  movies: PropTypes.array,
  movieDetail: PropTypes.func
}
