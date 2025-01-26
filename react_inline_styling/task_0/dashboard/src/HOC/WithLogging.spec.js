import React from 'react';
import { render, screen } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe('WithLogging HOC', () => {
  const WrappedComponent = WithLogging(MockApp);

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('logs when the component is mounted and unmounted', () => {
    const { unmount } = render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component MockApp is mounted');

    unmount();
    expect(console.log).toHaveBeenCalledWith('Component MockApp is going to unmount');
  });

  test('renders the wrapped component correctly', () => {
    render(<WrappedComponent />);
    expect(screen.getByText('Hello from Mock App Component')).toBeInTheDocument();
  });
});
