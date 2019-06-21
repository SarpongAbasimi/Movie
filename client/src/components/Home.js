import React from 'react';
import { MovieList } from '../components/movieList'
import PropTypes from 'prop-types';

export const Home = ({ movieListData }) => {
  return(<MovieList movies={ movieListData }/>);
};

Home.propTypes = {
  movies: PropTypes.array,
}
