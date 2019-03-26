import React from 'react';
import { NavLink } from 'react-router-dom';

// import CourseDetail from './CourseDetail';


const Courses = props => {
  const list = props.data;
  let course;

  if (list.length) {
    course = list.map((course) => {
      return (
        <div className="grid-33" key={course._id}>
          <NavLink className="course--module course--link" to={`/courses/${course._id}`}>
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
          </NavLink>
        </div>
      );
    });
  } else {
    course = <div>No results</div>
  }

  return (
    <div className="bounds">
      {course}
    </div>
  );
}

export default Courses;
