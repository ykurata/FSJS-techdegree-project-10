import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route,

} from 'react-router-dom';
import axios from 'axios';
import './App.css';

// App components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Auth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true
  },
  signout(cb) {
    this.isAuthenticated = false
  }
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Courses} />
          <Route path='/courses/:id' component={CourseDetail} />
          <Route path='/courses/create' component={CreateCourse} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
