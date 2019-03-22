import React from 'react';

const Courses = props => {
  const list = props.data;
  let course;

  if (list.length) {
    course = list.map((course) => {
      return (
        <div key={course._id}>
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{course.title}</h3>
        </div>
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


  // {list.length ? (
//     <div>
//       {list.map((iteid) => {
//         return(
//           <div key={id}>
//             {item.title}
//           </div>
//         );
//       })}
//     </div>
//   ) : (
//     <div>
//       <h2>No List Items Found</h2>
//     </div>
//   )
// }
}

export default Courses;
