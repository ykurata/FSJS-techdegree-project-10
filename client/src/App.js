import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

// import components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    }
  }

  // Sign in method. Passing user email and password to authenticate
  signIn = (email, password) => {
    const authHeader = {
      username: email,
      password: password
    }

    // Save user detail in localStorage
    axios.get('/api/users', { auth: authHeader } )
    .then(response => {
      // Store user detail in localStorage to keep user logged in
      window.localStorage.setItem('user', response.data);
      window.localStorage.setItem('id', response.data._id);
      window.localStorage.setItem('firstName', response.data.firstName);
      window.localStorage.setItem('lastName', response.data.lastName);
      window.localStorage.setItem('emailAddress', response.data.emailAddress);
      window.localStorage.setItem('password', this.state.password);
      window.location.href = '/';
    })
    .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        });
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path='/' component={Courses} />

            {/* routes require user sigin in  */}
            <PrivateRoute path='/courses/create' component={CreateCourse} />
            <PrivateRoute path='/courses/:id/update' component={UpdateCourse} />

            <Route path='/courses/:id' component={CourseDetail} />
            <Route path='/signin' render={() => <SignIn signIn={this.signIn} errorValue={this.state.errorMessage} />} />
            <Route path='/signup' component={SignUp}/>
            <Route path='/signout' component={SignOut}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
