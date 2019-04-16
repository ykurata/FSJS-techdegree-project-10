import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      confirmPassword: confirmPassword
    }

    if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Password and confrim password didn't match."
      });
    } else {
      axios.post('/api/users', newUser)
      .then(response => {
        window.location.href = '/';
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    }
  }



  render() {
    const divStyle = {
      color: 'red',
    }
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <div>
            <form onSubmit={this.onSubmit}>
              <div style={divStyle}>
                {this.state.errorMessage}
              </div>
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className=""
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className=""
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  className=""
                  placeholder="Email Address"
                  value={this.state.emailAddress}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  ype="password"
                  className=""
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  ype="password"
                  className=""
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                />
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">Sign Up</button>
                <NavLink to='/'><button className="button button-secondary" >Cancel</button></NavLink>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Already have a user account? <NavLink to='/signin'>Click here</NavLink> to sign in!</p>
        </div>
      </div>
    );
  }
}

export default SignUp;
