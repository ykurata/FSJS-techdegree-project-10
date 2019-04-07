import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const username = window.localStorage.getItem('username');
  if (username) {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><span>Welcome {username}</span><NavLink className="signout" to='/signout'>Sign Out</NavLink></nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
            <NavLink to='/signup' className="signup">Sign Up</NavLink>
            <NavLink to='/signin' className="signin">Sign In</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
