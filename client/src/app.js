import React from 'react';
import { Nav } from '../src/components/nav';
import { MovieList } from '../src/components/movieList';
import './styles/app.css'

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navLinks :[
        {id: 1, type: "DISCOVER"},
        {id: 2, type: "MOVIES"},
        {id: 3, type: "TV SHOWS"},
        {id: 4, type: "LOGIN"},
        {id: 5, type: "SIGN UP"},
      ],
      list: []
    }
  }

  fetchMovieData(){
    fetch('/api/movies')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw new Error('Request Failes');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => this.setState({list:jsonResponse}))
    .catch(rejection => console.log(`There was a rejection ${rejection}`));
  }
  componentDidMount(){
    return this.fetchMovieData()
   }

  render(){
    return(
    <div>
      <Nav link={this.state.navLinks}/>
      <MovieList movies={this.state.list}/>
    </div>
    )
  }
};