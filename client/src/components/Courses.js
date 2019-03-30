import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// import CourseDetail from './CourseDetail';
class Courses extends Component {
  // Initialize the state
  constructor(props) {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
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
      <div className="bounds">
        {this.state.list.map((course) => {
          return (
            <div className="grid-33" key={course._id}>
              <NavLink className="course--module course--link" to={`/courses/${course._id}`}>
                  <h4 className="course--label">Course</h4>
                  <h3 className="course--title">{course.title}</h3>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}


export default Courses;
