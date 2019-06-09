const fetch = require('node-fetch')

exports.movies = (req,res)=> {
  const baseurl= process.env.BASEURL,
  apikey = process.env.MOVIEDB_API_KEY
  fetch(`${baseurl}${apikey}`)
  .then(response =>{
    if(response.ok){
      return response.json()
    }
    throw new err('Request failed')
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => res.json(jsonResponse))
};