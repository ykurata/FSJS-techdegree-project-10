import React from 'react';

const Courses = props => {
  const list = props.data;
  let course;

  if (list.length) {
    course = list.map((course) => {
      return (
        <a className="course--module course--link" href="course-detail.html" key={course._id}>
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{course.title}</h3>
        </a>
      );
    });
  } else {
    course = <div>No results</div>
  }

  return (
    <div className="grid-33">
      {course}
    </div>
  );
}

export default Courses;
