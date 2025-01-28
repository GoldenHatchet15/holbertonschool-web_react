import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('Testing the <CourseListRow /> Component', () => {
  it('renders one cell with colSpan=2 when textSecondCell is not provided and isHeader is true', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const cell = screen.getByRole('columnheader');
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell).toHaveTextContent('dumbstring');
  });

  it('renders two cells when textSecondCell exists and isHeader is true', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
      textSecondCell: 'anotherstring',
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const cells = screen.getAllByRole('columnheader');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('dumbstring');
    expect(cells[1]).toHaveTextContent('anotherstring');
  });

  it('renders two <td> elements within a <tr> when isHeader is false', () => {
    const props = {
      isHeader: false,
      textFirstCell: 'dumbstring',
      textSecondCell: 'anotherstring',
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('dumbstring');
    expect(cells[1]).toHaveTextContent('anotherstring');
  });

  it('applies header row style when isHeader is true and textSecondCell is null', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'Header',
      textSecondCell: null,
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveStyle('background-color: rgba(222, 181, 181, 0.271)');
  });

  it('applies header row style when isHeader is true and textSecondCell is provided', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'Header 1',
      textSecondCell: 'Header 2',
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveStyle('background-color: rgba(222, 181, 181, 0.271)');
  });

  it('applies default row style when isHeader is false', () => {
    const props = {
      isHeader: false,
      textFirstCell: 'Cell 1',
      textSecondCell: 'Cell 2',
    };

    render(
      <table>
        <tbody>
          <CourseListRow {...props} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveStyle('background-color: rgba(245, 245, 245, 0.671)');
  });
});
