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


  handleDelete = () => {
    const emailAddress = window.localStorage.getItem('emailAddress');
    const password = window.localStorage.getItem('password');
    const authHeader = {
      username: emailAddress,
      password: password
    }

    axios.delete(`/api/courses/${this.props.match.params.id}`, { auth: authHeader })
      .then(response => {
        window.location.href = '/';
      })
      .catch(error => {
        console.log("Error deleting a data", error);
      });
  }

  render() {
    const userId = window.localStorage.getItem('id');
    const { course, user } = this.state;
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              {
                (userId === user._id)
                ? <span>
                    <NavLink to={`/courses/${course._id}/update`} className="button" >Update Course</NavLink>
                    <button onClick={this.handleDelete} className="button" >Delete Course</button>
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
