import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign Up</h1>
        <div>
          <form>
            <div>
              <input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value=""></input>
            </div>
            <div>
              <input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value=""></input>
            </div>
            <div>
              <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value=""></input>
            </div>
            <div>
              <input id="password" name="password" type="password" className="" placeholder="Password" value=""></input>
            </div>
            <div>
              <input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password"></input>
            </div>
            <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign Up</button><button class="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
          </form>
        </div>
        <p>&nbsp;</p>
        <p>Already have a user account? <NavLink to='/signin'>Click here</NavLink> to sign in!</p>
      </div>
    </div>
  );
}


export default SignUp;
