import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movie.css';


export const Movie = (props) => {
  const { selectedMovieDetail } = props
  console.log(selectedMovieDetail)
  return(
    <div>
      {selectedMovieDetail.map(eachInfo => {
        return(
          <div key={eachInfo.id} className='grid'>
           <div className='imageContainer'>
            {eachInfo.poster_path && <img id='detailImage' src={`https://image.tmdb.org/t/p/w500/${eachInfo.poster_path}`} alt="MovieImage"/>}
           </div>
           <div className='movieDetailContainer'>
             <div>
               <h1>{eachInfo.title}</h1>
             </div>
           </div>
         </div>
        );
      })}
    </div>
  );
};

Movie.propTypes = {
  selectedMovieDetail: PropTypes.array
}
