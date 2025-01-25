import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('Testing the <CourseList /> Component', () => {
  it('renders <CourseList /> without crashing', () => {
    render(<CourseList shouldRender />);
    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
  });

  it('renders the correct number of <CourseListRow /> components', () => {
    render(<CourseList shouldRender />);
    const rows = screen.getAllByRole('row'); // Rows include both headers and data rows
    expect(rows).toHaveLength(5); // Adjust this number if the actual number of rows is different
  });
});
