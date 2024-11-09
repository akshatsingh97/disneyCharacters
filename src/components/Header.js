import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shortfilms">Short Films</Link></li>
        <li><Link to="/tvshows">Tv Shows</Link></li>
    </ul>
    </div>
  )
}

export default Header;