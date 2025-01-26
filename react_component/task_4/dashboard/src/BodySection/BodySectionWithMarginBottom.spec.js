import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    render(<BodySectionWithMarginBottom title="Test Title"><p>Test content</p></BodySectionWithMarginBottom>);
    const wrapperDiv = screen.getByText('Test content').closest('div.bodySectionWithMargin');
    expect(wrapperDiv).toHaveClass('bodySectionWithMargin');
  });

  test('renders the BodySection component', () => {
    render(<BodySectionWithMarginBottom title="Test Title"><p>Test content</p></BodySectionWithMarginBottom>);
    const heading = screen.getByRole('heading', { name: 'Test Title' });
    expect(heading).toBeInTheDocument();
  });
});
