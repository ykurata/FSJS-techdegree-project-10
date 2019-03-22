import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// App components
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
      <div className="bound">
        <Courses data={this.state.list} />
      </div>
    );
  }
}

export default App;
