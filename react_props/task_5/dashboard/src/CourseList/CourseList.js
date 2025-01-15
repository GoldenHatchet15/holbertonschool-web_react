import React from 'react'
import CourseListRow from './CourseListRow.js'
import './CourseList.css'
import CourseShape from './CourseShape.js'
import PropTypes from 'prop-types';

function CourseList({ listCourses }){
    return(
        <table className="CourseList" id="CourseList">
        <thead className="title">
            <CourseListRow isHeader textFirstCell="Available courses" />
            <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        {!listCourses.length && (
          <CourseListRow textFirstCell='No course available yet' isHeader={false}/>
        )}

        {listCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
        ))}
      </tbody>
    </table>
    )
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};
CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList