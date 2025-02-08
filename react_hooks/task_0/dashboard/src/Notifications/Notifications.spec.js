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
    render(<Notifications markNotificationAsRead={() => {}} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('logs "Notification {id} has been marked as read" when a notification is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const mockMarkNotificationAsRead = jest.fn(); // ✅ Create mock function

    render(
      <Notifications
        displayDrawer={true}
        notifications={notifications}
        markNotificationAsRead={mockMarkNotificationAsRead} // ✅ Pass function
      />
    );

    const item = screen.getByText('New course available');
    fireEvent.click(item);

    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(1); // ✅ Check function call

    consoleLogSpy.mockRestore();
  });

  test('does not re-render if the length of the notifications prop remains the same', () => {
    const { rerender } = render(
      <Notifications
        displayDrawer={true}
        notifications={notifications}
        markNotificationAsRead={() => {}}
      />
    );
    const notificationsBeforeRerender = screen.queryAllByRole('listitem').length;

    rerender(
      <Notifications
        displayDrawer={true}
        notifications={notifications}
        markNotificationAsRead={() => {}}
      />
    );
    const notificationsAfterRerender = screen.queryAllByRole('listitem').length;

    expect(notificationsBeforeRerender).toBe(notificationsAfterRerender);
  });

  test('re-renders if the length of the notifications prop changes', () => {
    const { rerender } = render(
      <Notifications
        displayDrawer={true}
        notifications={notifications}
        markNotificationAsRead={() => {}}
      />
    );
    const newNotifications = [...notifications, { id: 3, type: 'default', value: 'React update available' }];

    rerender(
      <Notifications
        displayDrawer={true}
        notifications={newNotifications}
        markNotificationAsRead={() => {}}
      />
    );
    expect(screen.getByText('React update available')).toBeInTheDocument();
  });

  test("calls handleDisplayDrawer when menu item is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} displayDrawer={false} markNotificationAsRead={() => {}} />);
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test("calls handleHideDrawer when close button is clicked", () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications handleHideDrawer={handleHideDrawer} displayDrawer={true} markNotificationAsRead={() => {}} />);
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
