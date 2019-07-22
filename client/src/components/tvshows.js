import React from 'react';

export class TvShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tvShowData: []
    }
  }
  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if(response.ok){
        return(response.json())
      }
      throw new Error('Promblem with getting tv shows')
    }).then(jsonResponse => console.log(jsonResponse))
    .catch(rejection => console.log(rejection))
  }

  componentDidMount(){
    return this.getData()
  }

  render(){
    return <h1>Hllo</h1>
  }
}

export const video = {
  play() {
    return true;
  },
};

