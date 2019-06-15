export const popularMoviesData = (that)=>{
    fetch('/api/movies/popular/movies')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw new Error('Request Failes');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => that.setState({list:jsonResponse}))
    .catch(rejection => console.log(`There was a rejection ${rejection}`));
}


