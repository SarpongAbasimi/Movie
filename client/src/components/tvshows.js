import React from 'react';

export class TvShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tvShowData: []
    }
  }
  getData(){
    fetch('/api/movies/tvshows/movies')
    .then(response => {
      if(response.ok){
        return(response.json())
      }
      throw new Error('Promblem with getting tv shows')
    }).then(jsonResponse => this.setState({tvShowData: jsonResponse.results }))
    .catch(rejection => rejection )
  }

  componentDidMount(){
    return this.getData()
  }

  render(){
    const { tvShowData } = this.state
    return(<div className='container'>
      { tvShowData.map(tvShows => {
        return(
          <div key={tvShows.id} className='main-container'>
            { tvShows.poster_path && <img src={`https://image.tmdb.org/t/p/w500${tvShows.poster_path}`} alt=''/> }
            <div id='title-holder'>{tvShows.name}</div>
          </div>
        );
      })}
    </div>)
  }
}