import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


class Courses extends Component {
  // Initialize the state
  constructor(props) {
    super();
    this.state = {
      list: []
    }
  }

  // Get all courses from the REST API
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

        <div className="grid-33">
          <NavLink className="course--module course--add--module" to='/courses/create'>
            <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 13 13" className="add">
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>New Course</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Courses;
