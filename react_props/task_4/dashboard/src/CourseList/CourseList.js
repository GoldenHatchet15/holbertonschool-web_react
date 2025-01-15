import React from 'react'
import CourseListRow from './CourseListRow.js'
import './CourseList.css'


function CourseList(){
    return(
        <table className="CourseList" id="CourseList">
        <thead className="title">
            <CourseListRow isHeader textFirstCell="Available courses" />
            <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
            <CourseListRow textFirstCell="ES6" textSecondCell="60" />
            <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
            <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
    </table>
    )
}




export default CourseList