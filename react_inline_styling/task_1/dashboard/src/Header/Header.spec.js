import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';


beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Mock the logo import
jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo.jpg');

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText('Holberton logo');
    
    // Check if the logo is in the document
    expect(logo).toBeInTheDocument();
    // Check if the logo source contains the mocked file name
    expect(logo.src).toContain('holberton-logo.jpg');
  });

  test('renders h1 element with the correct text', () => {
    const { getByText } = render(<Header />);
    const heading = getByText('School dashboard');
    
    // Check if the h1 element is rendered
    expect(heading).toBeInTheDocument();
    // Verify that the rendered element is indeed an h1 tag
    expect(heading.tagName).toBe('H1');
  });
});
