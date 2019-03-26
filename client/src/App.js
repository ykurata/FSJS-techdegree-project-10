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


class App extends Component {
  // Initialize the state
  constructor(props) {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.getCourses();
  }

  // getCourses = () => {
  //   fetch('/api/courses')
  //   .then(res => res.json())
  //   .then(listData => {
  //     this.setState({ list: listData });
  //   })
  // }
  getCourses = () => {
    axios.get('/api/courses')
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' render={ () => <Courses data={this.state.list} />} />
          <Route path='/courses/:id' component={CourseDetail} />
          <Route path='/courses/create' component={CreateCourse} />
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
