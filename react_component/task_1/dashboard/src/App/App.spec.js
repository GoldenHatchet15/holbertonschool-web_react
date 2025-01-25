import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  let logOutMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock alert
    render(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks after each test
  });

  test('calls logOut when Ctrl+H is pressed', () => {
    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('shows alert with "Logging you out" when Ctrl+H is pressed', () => {
    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
