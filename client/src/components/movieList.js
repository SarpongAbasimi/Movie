import React from 'react';
import '../styles/movieList.css';

export const MovieList = (props) => {
  const { movies } = props
  return(
  <div className='popularMoviesListContainer'>
      {movies.results && movies.results.map(eachMovie => {
        return(
          <div key={eachMovie.id} id="eachMovie">
           <span id="vote-average">{eachMovie.vote_average}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`} alt={eachMovie.title}/>
          </div>
        );
      })}
  </div>
  );
}