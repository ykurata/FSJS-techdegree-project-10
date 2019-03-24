import React from 'react';
import { NavLink } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        <div>
          <form>
            <div>
              <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" ></input>
            </div>
              <div><input id="password" name="password" type="password" className="" placeholder="Password" ></input>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </div>
          </form>
        </div>
        <p>&nbsp;</p>
        <p>Don't have a user account? <NavLink to='/signup'>Click here</NavLink> to sign up!</p>
      </div>
    </div>
  );
}

export default SignIn;
