import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

class CourseDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: [],
      user: [],
    }
  }


  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          course: response.data,
          user: response.data.user[0]
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  }

  render() {
    const loggedInuser = window.localStorage.getItem('user')
    const { course, user } = this.state;
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              {
                (loggedInuser)
                ? <span>
                    <NavLink to='' className="button" >Update Course</NavLink>
                    <NavLink to='' className="button" >Delete Course</NavLink>
                    <NavLink to="/" className="button button-secondary">Return to List</NavLink>
                  </span>
                : <NavLink to="/" className="button button-secondary">Return to List</NavLink>
              }
            </div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
              <p className="user--name">By {user.firstName} {user.lastName}</p>
            </div>
            <div className="course--description">
              <p>{course.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                    <ul>
                      <li>{course.materialsNeeded}</li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
