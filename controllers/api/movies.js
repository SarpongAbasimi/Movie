const fetch = require('node-fetch')

exports.movies = (req,res)=> {

  res.json({
    "adult": false,
    "backdrop_path": "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
    "belongs_to_collection": {
        "id": 8945,
        "name": "Mad Max Collection",
        "poster_path": "/jZowUf4okNYuSlgj5iURE7CDMho.jpg",
        "backdrop_path": "/zI0q2ENcQOLECbe0gAEGlncVh2j.jpg"
    },
    "budget": 150000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "http://www.madmaxmovie.com",
    "id": 76341,
    "imdb_id": "tt1392190",
    "original_language": "en",
    "original_title": "Mad Max: Fury Road",
    "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    "popularity": 29.718,
    "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    "production_companies": [
        {
            "id": 79,
            "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
            "name": "Village Roadshow Pictures",
            "origin_country": "US"
        },
        {
            "id": 2537,
            "logo_path": null,
            "name": "Kennedy Miller Productions",
            "origin_country": "AU"
        },
        {
            "id": 174,
            "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "AU",
            "name": "Australia"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2015-05-13",
    "revenue": 378858340,
    "runtime": 121,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "What a Lovely Day.",
    "title": "Mad Max: Fury Road",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 14427
});
  // const baseurl= process.env.BASEURL,
  // apikey = process.env.MOVIEDB_API_KEY
  // fetch(`${baseurl}${apikey}`)
  // .then(response =>{
  //   if(response.ok){
  //     return response.json()
  //   }
  //   throw new err('Request failed')
  // }, networkError => console.log(networkError.message))
  // .then(jsonResponse => res.json(jsonResponse))
};