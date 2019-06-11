import React from 'react';
import '../styles/nav.css'

export const Nav = (props)=>{
  const { link } = props
  return(
   <div className="navbar">
     {/* { link.map(eachLink => {
      return(
        <ul>
          <li key={eachLink.id}>{eachLink.type}</li>
        </ul>
      );
     })} */}
   </div>
  );
}