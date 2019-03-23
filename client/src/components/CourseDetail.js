import React from 'react';
import axios from 'axios';

class CourseDetail extends Components {

  constructor(prop) {
    super();
    this.state = {
      course: ""
    }
  }

  componentDidMount() {
    this.getCourse();
  }

  getCourse = () => {
    axios.get(`/api/course/${course._id}`)
      .then(response => {
        this.state({
          course: response.data
        })
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><a className="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
                className="button button-secondary" href="index.html">Return to List</a></div>
          </div>
        </div>
      </div>
    )
  }
}
