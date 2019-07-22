import React from 'react';
import '../styles/discover.css';

export class Discover extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      discovermovie:[]
    }
  }

  componentDidMount(){
    fetch('api/movies/discover/movies')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw new Error('response failed')
    }).then(jsonResponse => this.setState({ discovermovie: jsonResponse.results}))
  }

  render(){
    const { discovermovie } = this.state
    return(<div className='container'>
      {discovermovie.map(movies => {
        return(
          <div key={movies.id} className='main-container'>
            { movies.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt=''/> }
            <div id='title-holder'>{movies.title}</div>
          </div>
        );
      })}
    </div>)
  }
}