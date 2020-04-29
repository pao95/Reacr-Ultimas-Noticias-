import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <h2>{titulo}</h2>
  </li>
  
</ul>
     );
}
 

export default Header;