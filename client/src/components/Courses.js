import React from 'react';

const Courses = props => {
  const list = props.data;
  let course;

  if (list.length) {
    course = list.map((course) => {
      return (
        <div className="grid-33" key={course._id}>
          <a className="course--module course--link" href="course-detail.html">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
          </a>
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
