import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

class UpdateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      course: [],
      title: '',
      description: '',
      estimatedTime: '',
      materialsNeeded: '',
      errorMessage: []
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const emailAddress = window.localStorage.getItem('emailAddress');
    const password = window.localStorage.getItem('password');
    const user = window.localStorage.getItem('user');

    const updatedCourse = {
      user: user._id,
      title: this.state.title,
      description: this.state.description,
      estimatedTime: this.state.estimatedTime,
      materialsNeeded: this.state.materialsNeeded,
    };

    axios({
      method: "put",
      url: `/api/courses/${this.props.match.params.id}`,
      auth: {
        username: emailAddress,
        password: password
      },
      data: updatedCourse
    })
    .then(response => {
      window.location.href = `/courses/${this.props.match.params.id}`;
    })
    .catch(error => {
      this.setState({
        errorMessage: error.response.data.message
      });
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    });
  }

  // Get a existing data from mongodb
  componentDidMount(){
    axios.get(`/api/courses/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          course: response.data,
          title: response.data.title,
          description: response.data.description,
          estimatedTime: response.data.estimatedTime,
          materialsNeeded: response.data.materialsNeeded
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
    const firstName = window.localStorage.getItem('firstName');
    const lastName = window.localStorage.getItem('lastName');
    const { course, title, description, estimatedTime, materialsNeeded } = this.state;

    return (
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          {
            (this.state.errorMessage.length)
            ? <div>
                <h2 className="validation--errors--label">Validation errors</h2>
                <div className="validation-errors">
                  <ul>
                    <li>{this.state.errorMessage}</li>
                  </ul>
                </div>
              </div>
            : <div></div>
          }
          <form onSubmit={this.onSubmit}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="input-title course--title--input"
                    placeholder="Course title..."
                    value={title}
                    onChange={this.onChange}
                   />
                </div>
                <p>By {firstName} {lastName}</p>
              </div>
              <div className="course--description">
                <div>
                  <textarea
                    id="description"
                    name="description"
                    className=""
                    placeholder="Course description..."
                    value={description}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                      <input
                        id="estimatedTime"
                        name="estimatedTime"
                        type="text"
                        className="course--time--input"
                        placeholder="Hours"
                        value={estimatedTime}
                        onChange={this.onChange}
                      />
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                      <textarea
                        id="materialsNeeded"
                        name="materialsNeeded"
                        className=""
                        placeholder="List materials..."
                        value={materialsNeeded}
                        onChange={this.onChange}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">Update Course</button>
              <NavLink to={`/courses/${course._id}`}><button className="button button-secondary">Cancel</button></NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateCourse;
