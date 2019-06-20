import React from 'react';
import '../styles/movieList.css';
import { Link } from 'react-router-dom';

export const MovieList = (props) => {
  const { movies, movieDetail } = props
  return(
  <div className='popularMoviesListContainer'>
      {movies.results && movies.results.map(eachMovie => {
        return(
          <div key={eachMovie.id} id="eachMovie">
           <span id="vote-average">{eachMovie.vote_average}</span>
             <Link to={`/movie/${eachMovie.id}`}>
               <img  onClick={()=> movieDetail} src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`} alt={eachMovie.title}/>
             </Link>
          </div>
        );
      })}
  </div>
  );
}