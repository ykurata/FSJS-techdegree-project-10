import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  if (props.user) {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><span>Welcome {props.user.firstName}</span><NavLink className="signout" to='/signout'>Sign Out</NavLink></nav>
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
