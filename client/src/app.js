import React from 'react';
import { Nav } from '../src/components/nav';
import { Home } from './components/Home';
import { popularMoviesData } from '../src/components/apiCalls';
import {  Movie } from '../src/components/movie';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/app.css';

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount(){
    return popularMoviesData(this);
   }

  render(){
    return(
    <Router>
      <div>
        <Nav link={this.state.navLinks}/>
      </div>
      <Route exact path='/' render={()=> <Home movieListData={this.state.list} /> }/>
      <Route exact path='/movie/:id' component = { Movie }/>
    </Router>
    )
  }
};