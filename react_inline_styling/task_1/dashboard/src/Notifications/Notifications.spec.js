import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';


beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications Component', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'Payment required' },
  ];

  test('renders the title Your Notifications always', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('logs "Notification {id} has been marked as read" when a notification is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const mockMarkAsRead = jest.fn((id) => console.log(`Notification ${id} has been marked as read`));
    render(<Notifications displayDrawer={true} notifications={notifications} markAsRead={mockMarkAsRead} />);

    const item = screen.getByText('New course available');
    fireEvent.click(item);

    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleLogSpy.mockRestore();
  });

  test('does not re-render if the length of the notifications prop remains the same', () => {
    const { rerender } = render(<Notifications displayDrawer={true} notifications={notifications} />);
    const notificationsBeforeRerender = screen.queryAllByRole('listitem').length;

    rerender(<Notifications displayDrawer={true} notifications={notifications} />);
    const notificationsAfterRerender = screen.queryAllByRole('listitem').length;

    expect(notificationsBeforeRerender).toBe(notificationsAfterRerender);
  });

  test('re-renders if the length of the notifications prop changes', () => {
    const { rerender } = render(<Notifications displayDrawer={true} notifications={notifications} />);
    const newNotifications = [...notifications, { id: 3, type: 'default', value: 'React update available' }];

    rerender(<Notifications displayDrawer={true} notifications={newNotifications} />);
    expect(screen.getByText('React update available')).toBeInTheDocument();
  });
});
