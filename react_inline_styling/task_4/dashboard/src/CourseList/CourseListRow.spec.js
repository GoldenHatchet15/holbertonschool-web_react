import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite style injection during testing
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Test-specific styles
const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
});

describe('<CourseListRow />', () => {
  it('renders one cell with colSpan=2 when textSecondCell is not provided and isHeader is true', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header" />
        </tbody>
      </table>
    );

    const cell = screen.getByRole('columnheader');
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell).toHaveTextContent('Header');
  });

  it('applies correct styles for header rows', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveClass(css(styles.headerRow)); // Validate header row style
  });

  it('applies correct styles for default rows', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveClass(css(styles.defaultRow)); // Validate default row style
  });
});
