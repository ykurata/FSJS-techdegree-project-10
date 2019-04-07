import React,{ Component }  from 'react';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      emailAddress: '',
      password: '',
      loggedIn: false,
      username: ''
    }
  }

  handleEmailChange = e => {
    this.setState({ emailAddress: e.target.value });
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const authHeader = {
      username: this.state.emailAddress,
      password: this.state.password
    }
    axios.get('/api/users', { auth: authHeader } )
    .then(response => {
      this.setState({
        loggedIn: true,
        username: response.data.firstName
       });
      window.localStorage.setItem('user', response.data);
      window.localStorage.getItem('user');
      window.location.href = '/';
      console.log(this.state.username);
      console.log("You logged in!");
    })
    .catch(error => {
      console.log("Error loggin please try again", error);
    });
  }

  render() {
    // if (this.state.loggedIn) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
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
                <button className="button button-secondary" >Cancel</button>
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
