import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  if (firstName || lastName) {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><span>Welcome {firstName} {lastName}</span><NavLink className="signout" to='/signout'>Sign Out</NavLink></nav>
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
