import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  test('renders the correct HTML with type and value props', () => {
    render(<NotificationItem type="default" value="Test notification" id={1} markAsRead={() => {}} />);
    const item = screen.getByText('Test notification');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders the correct HTML with HTML prop', () => {
    const htmlContent = { __html: 'Urgent notification' };
    render(<NotificationItem type="urgent" html={htmlContent} id={1} markAsRead={() => {}} />);
    const item = screen.getByText('Urgent notification');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
  });

  test('calls markAsRead with the correct id when clicked', () => {
    const markAsReadMock = jest.fn();
    render(<NotificationItem type="default" value="Test notification" id={42} markAsRead={markAsReadMock} />);

    const item = screen.getByText('Test notification');
    fireEvent.click(item);

    expect(markAsReadMock).toHaveBeenCalledTimes(1);
    expect(markAsReadMock).toHaveBeenCalledWith(42);
  });
});
