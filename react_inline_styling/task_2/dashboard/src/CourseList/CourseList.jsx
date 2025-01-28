import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
});

class CourseList extends Component {
  render() {
    return (
      <table className={css(styles.table)} id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
          <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
        </tbody>
      </table>
    );
  }
}

export default WithLogging(CourseList);
