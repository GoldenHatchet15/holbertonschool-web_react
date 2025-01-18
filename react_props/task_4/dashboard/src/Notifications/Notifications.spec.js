import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'Payment required' },
  ];

  test('renders the title Your Notifications always', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('does not display the notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });

  test('displays the notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={notifications} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText('New course available')).toBeInTheDocument();
  });

  test('displays No new notification for now when notifications is empty', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
  });
});
