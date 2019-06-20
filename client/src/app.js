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
      detailData: []
    }
    this.fetchMovieDetail = this.fetchMovieDetail.bind(this);
  }

  componentDidMount(){
    return popularMoviesData(this);
   }

  fetchMovieDetail(movieId){
    const { list } = this.state;
      return list.results.filter( movie =>  movie.id === movieId ? this.setState({ detailData: [ movie ] }) : "Sorry")
  }

  render(){
    return(
    <Router>
      <div>
        <Nav link={this.state.navLinks}/>
      </div>
      <Route exact path='/' render={()=> <Home movieListData={this.state.list} getDetail={this.fetchMovieDetail} /> }/>
      <Route exact path='/movie' render={ ()=> <Movie selectedMovieDetail={this.state.detailData} />} />
    </Router>
    )
  }
};