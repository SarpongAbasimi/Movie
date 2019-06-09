import React from 'react';
import { Nav } from '../src/components/nav'

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
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
      <Nav/>
    </div>
    )
  }
};