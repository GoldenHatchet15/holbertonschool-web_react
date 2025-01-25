import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('calls logOut when Ctrl+H is pressed', () => {
    const logOutMock = jest.fn();
    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('displays alert with "Logging you out" when Ctrl+H is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App />);

    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    alertMock.mockRestore(); // Restore the original alert implementation
  });
});
