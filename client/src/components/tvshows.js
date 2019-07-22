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
    }).then(jsonResponse => this.setState({tvShowData: jsonResponse}))
    .catch(rejection => rejection )
  }

  componentDidMount(){
    return this.getData()
  }

  render(){
    console.log(this.state.tvShowData)
    return <h1>Hllo</h1>
  }
}