import React from 'react';
import { Nav } from '../src/components/nav';
import { Home } from './components/Home';
import { popularMoviesData } from '../src/components/apiCalls';
import {  Movie } from '../src/components/movie';
import { NoMatch } from '../src/components/nomatch';
import { Discover } from '../src/components/discover';
import { TvShow } from '../src/components/tvshows'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path='/' render={()=> <Home movieListData={this.state.list} /> }/>
        <Route exact path='/movie/:id' component = { Movie }/>
        <Route path='/discover' component={ Discover }/>
        <Route path='/tvshows' component={TvShow} />
        <Route component={ NoMatch }/>
      </Switch>
    </Router>
    )
  }
};