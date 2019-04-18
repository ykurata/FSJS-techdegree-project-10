import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    }
  }

  // update emailAddress state
  handleEmailChange = e => {
    this.setState({ emailAddress: e.target.value });
  }

  // update password state
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.emailAddress, this.state.password);
  }

  render() {
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              {
                (this.props.errorValue.length)
                ? <div>
                    <h2 className="validation--errors--label">Validation errors</h2>
                    <div className="validation-errors">
                      <ul>
                        <li>{this.props.errorValue}</li>
                      </ul>
                    </div>
                  </div>
                : <div></div>
              }
              <div>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  className=""
                  placeholder="Email Address"
                  value={this.state.emailAddress}
                  onChange={this.handleEmailChange} />
              </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=""
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">Sign In</button>
                <NavLink to='/'><button className="button button-secondary" >Cancel</button></NavLink>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <NavLink to='/signup'>Click here</NavLink> to sign up!</p>
        </div>
      </div>
    );
  }
}

export default SignIn;
