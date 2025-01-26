import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  test('renders a heading with the title prop value', () => {
    render(<BodySection title="Test Title"><p>Test content</p></BodySection>);
    const heading = screen.getByRole('heading', { name: 'Test Title' });
    expect(heading).toBeInTheDocument();
  });

  test('renders any number of children passed to it', () => {
    render(
      <BodySection title="Test Title">
        <p>First child</p>
        <p>Second child</p>
      </BodySection>
    );
    expect(screen.getByText('First child')).toBeInTheDocument();
    expect(screen.getByText('Second child')).toBeInTheDocument();
  });
});
