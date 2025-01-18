import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
  ];

  test('renders without crashing', () => {
    render(<Notifications notifications={notificationsList} />);
    expect(screen.getByText(/Here is the list of notifications/)).toBeInTheDocument();
  });

  test('renders the correct HTML for the first NotificationItem', () => {
    render(<Notifications notifications={notificationsList} />);
    const firstItem = screen.getByText(/New course available/);
    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toHaveAttribute('data-notification-type', 'default');
  });
});
