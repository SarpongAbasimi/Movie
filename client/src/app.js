import React from 'react';
import { Nav } from '../src/components/nav';
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

  render(){
    return(
    <div>
      <Nav link={this.state.navLinks}/>
    </div>
    )
  }
};