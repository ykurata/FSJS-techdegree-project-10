import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

// import components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Courses} />
          <Route path='/courses/:id' component={CourseDetail} />
          <PrivateRoute path='/courses/create' component={CreateCourse} />
          <Route path='/signin' render={() => <SignIn onUsernameChange={this.onUsernameChange} />} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/signout' component={SignOut}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
