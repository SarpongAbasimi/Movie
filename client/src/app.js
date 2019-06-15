import React from 'react';
import { Nav } from '../src/components/nav';
import { MovieList } from '../src/components/movieList';
import { popularMoviesData } from '../src/components/apiCalls'
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

  componentDidMount(){
    return popularMoviesData(this)
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