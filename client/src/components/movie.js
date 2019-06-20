import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movie.css';
import { Link } from 'react-router-dom';

export const Movie = (props) => {
  const { selectedMovieDetail } = props
  console.log(selectedMovieDetail)
  return(
    <div>
      {selectedMovieDetail.map(eachInfo => {
        return(
          <div key={eachInfo.id} className='grid'>
           <div className='imageContainer'>
              <div className='Back'>
                <Link to='/'><span id='backtitle'>Back</span></Link>
              </div>
            {eachInfo.poster_path && <img id='detailImage' src={`https://image.tmdb.org/t/p/w500/${eachInfo.poster_path}`} alt="MovieImage"/>}
           </div>
           <div className='movieDetailContainer'>
             <div id='info'>
               <h1>{eachInfo.title}</h1>
             </div>
             <div id='overView'> 
               <h1>Overview</h1>
               <p>{eachInfo.overview}</p>
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
