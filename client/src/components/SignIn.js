import React,{ Component }  from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      emailAddress: '',
      password: '',
      errorMessage: ''
    }
  }

  handleEmailChange = e => {
    this.setState({ emailAddress: e.target.value });
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  // validation = e => {
  //   if (this.state.emailAddress === '') {
  //     this.setState({
  //       errorMessage: "Email Address is required"
  //     });
  //   } else if (this.state.password === '') {
  //     this.setState({
  //       errorMessage: "Password is required"
  //     });
  //   } else {
  //     this.setState({
  //       errorMessage: ''
  //     })
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();
    // this.validation();
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
      window.localStorage.setItem('firstName', response.data.firstName);
      window.localStorage.setItem('lastName', response.data.lastName);
      window.location.href = '/';
    })
    .catch(error => {
      if (this.state.emailAddress === "") {
        this.setState({
          errorMessage: "Email Address is required"
        });
      } else if (this.state.password === "") {
        this.setState({
          errorMessage: "Password is required"
        });
      } else {
        this.setState({
          errorMessage: "Incorrect Email Address or Password"
        });
      }
      console.log("Error loggin please try again", error);
    });
  }

  render() {
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                {this.state.errorMessage}
              </div>
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
