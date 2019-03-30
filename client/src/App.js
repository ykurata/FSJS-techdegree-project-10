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
      emailAddress: '',
      password : ''
    }
  }

  // componentDidMount(){
  //   this.getUser();
  //   axios.get('/api/users', { auth: {
  //     "username": ,
  //     "password": "password"
  //   }})
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log("Error fetching and parsing data", error);
  //   });
  // }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value });
  }


  getUser = () => {
    axios.get('/api/users', { auth: {
      "username": this.state.emailAddress,
      "password": this.state.password
    }})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  componentDidMount() {
    this.getUser();
  }

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
