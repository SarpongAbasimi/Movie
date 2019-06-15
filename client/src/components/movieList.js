import React from 'react'

export const MovieList = (props) => {
  const { movies } = props
  const basePath = 'https://image.tmdb.org/t/p/w500/'
  return(
  <div>
  {console.log(movies)}
  <span>{movies.genres? movies.genres[0].name : 'hey'}</span>
  <img src={`${basePath}${movies.backdrop_path}`} alt="Poster"/>
  </div>
  );
}