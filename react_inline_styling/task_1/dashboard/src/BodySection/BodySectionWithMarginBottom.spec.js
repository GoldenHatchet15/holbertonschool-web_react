import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySectionWithMarginBottom />', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test content</p>
      </BodySectionWithMarginBottom>
    );

    // Find the div with the dynamically generated class name
    const wrapperDiv = container.querySelector('div');
    expect(wrapperDiv.className).toMatch(/bodySectionWithMargin/); // Regex to match the dynamic class name
  });

  test('renders the BodySection component', () => {
    render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test content</p>
      </BodySectionWithMarginBottom>
    );

    const heading = screen.getByRole('heading', { name: 'Test Title' });
    expect(heading).toBeInTheDocument();
  });
});
