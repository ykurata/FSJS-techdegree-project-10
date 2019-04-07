import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route,
  Redirect
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
import SignOut from './components/SignOut';
import PrivateRoute from './components/PrivateRoute';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.setState({
      user: window.localStorage.getItem('user'),
    });
  }

  render() {
    // const { user } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: '/'} }
    // const { signIn } = this.state
    //
    // if (signIn === true) {
    //   return <Redirect to='/courses/create' />
    // }
    return (
      <BrowserRouter>
        <div>
          <Header user={this.state.user}/>
          <Route exact path='/' component={Courses} />
          <Route path='/courses/:id' component={CourseDetail} />
          <PrivateRoute path='/courses/create' component={CreateCourse} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/signout' component={SignOut}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
