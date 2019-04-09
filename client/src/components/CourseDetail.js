import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

class CourseDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: []
    }
  }

  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          course: response.data,
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    const user = window.localStorage.getItem('user')
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              {
                (user)
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
              <h3 className="course--title">{this.state.course.title}</h3>
              <p className="user--name">By {this.state.course.user}</p>
            </div>
            <div className="course--description">
              <p>{this.state.course.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{this.state.course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                    <ul>
                      <li>{this.state.course.materialsNeeded}</li>
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
