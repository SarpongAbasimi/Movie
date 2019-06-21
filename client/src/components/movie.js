import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movie.css';
import { Link } from 'react-router-dom';

export class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const { match } = this.props;
  }
  
  render(){
    return(
      <div>
        hello
      </div>
    );
  }
}

Movie.propTypes = {
  selectedMovieDetail: PropTypes.object,
}


