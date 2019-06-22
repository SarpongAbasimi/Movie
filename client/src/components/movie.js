import React from 'react';
import '../styles/movie.css';


export class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: undefined
    }
  }

  componentDidMount(){
    const { match } = this.props,
    id = match.params.id;
    fetch(`/api/movies/${id}`)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Movie detail request failed');
    }).then(jsonResponse => this.setState({ data: jsonResponse }))
  }

  render(){
    const { data } = this.state;
    return(
      <div>
        { typeof(data) == 'object' && <div className='grid'>
          <div className='imageContainer'>
            { data.backdrop_path && <img id='poster' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt='movie-poster'/>}
          </div>
          <div className='infomation-container'>
           { data.original_title && <h1 id='title'>{data.original_title}</h1> }
            <div className='over-view'>
             <h1 id='overview-title'>Overview</h1>
             { data.overview && <p>{data.overview}</p> }
            </div>
            <div id='facts'>
              <h1 id='factTitle'>Production Companies</h1>
              <div id='production-companies'>
                {data.production_companies.map(each_company => {
                  return(
                    <div className='company' key={each_company.id}> 
                      {each_company.logo_path && 
                      <div className='imgDiv'>
                        <img id='com-img' src={`https://image.tmdb.org/t/p/w500/${each_company.logo_path}`} alt='logo'/>
                      </div>
                      }
                    </div>
                  );
                })}
              </div>
              <div className='facts-container'>
                <h1>Facts</h1>
                 { data.budget && 
                 <div>
                   <p className='budget-word'>Budget</p>
                   <span id='budget'>{`$ ${data.budget}`}</span>
                   <p id='status'>Status</p>
                   <span id='status-data'>{data.status}</span>
                   <p id='genere'>Genere</p>
                   { data.genres && data.genres.map(each_genere => {
                     return(
                       <span key={each_genere.id} className='generes-name'>{each_genere.name}</span>
                     );
                   })}
                 </div>
                 }
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}
