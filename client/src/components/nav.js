import React from 'react';
import PropTypes from 'prop-types';
import '../styles/nav.css';

export const Nav = (props)=>{
  const { link } = props
  return(
   <div className="navbar">
     { link.map(eachLink => {
      return(
        <ul key={eachLink.id}>
          <li className="navBarLink">{eachLink.type}</li>
        </ul>
      );
     })}
   </div>
  );
}

Nav.propTypes = {
  link: PropTypes.array
}