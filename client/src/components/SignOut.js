import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const SignOut = () => {
  window.localStorage.clear();
  window.location.href = '/'
}


export default SignOut;
