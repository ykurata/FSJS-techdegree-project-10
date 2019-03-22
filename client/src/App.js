import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

// App components
import Header from './components/Header';
import Courses from './components/Courses';

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
      <div>
        <Header />
        <div className="bounds">
          <Courses data={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
