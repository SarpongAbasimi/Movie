import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export const Nav = (props)=>{
  return(
   <div className="navbar">
     <div className='navElementsContainer'>
       <ul className='movies'>
         <Link to='/' className='links'><li id='home'>Home</li> </Link>
         <Link to='/discover' className='links'><li id='discover'>Discover</li> </Link>
         <Link to='/movies' className='links'><li id='movies'>Movies</li></Link>
         <Link to='/tvshows' className='links'><li id='tv-shows'>TV SHOWS</li></Link>
       </ul>
       <ul className='register'>
         <li id='login'>LOGIN</li>
         <li id='sign-up'>SIGN UP</li>
       </ul>
     </div>
   </div>
  );
}