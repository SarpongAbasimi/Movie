import React  from 'react';
import '../styles/noMatch.css';
import { Link } from 'react-router-dom';

export const NoMatch = ()=> {
  return(
  <div className='container-wrapper'>
    <h1>Sorry, we can't find the page you're looking for</h1>
    <Link to='/' className='link'><span id='errorPageBackHome'>Back to Home</span></Link>
  </div>
  );
};