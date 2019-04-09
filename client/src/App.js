import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route,
  Switch
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

          <Switch>
            <Route exact path='/' component={Courses} />

            <PrivateRoute path='/courses/create' component={CreateCourse} />
            <Route path='/courses/:id' component={CourseDetail} />
            <Route path='/signin' render={() => <SignIn onUsernameChange={this.onUsernameChange} />} />
            <Route path='/signup' component={SignUp}/>
            <Route path='/signout' component={SignOut}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
