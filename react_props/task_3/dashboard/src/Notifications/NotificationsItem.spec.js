import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  test('renders the correct HTML with type and value props', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const item = screen.getByText('Test notification');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders the correct HTML with HTML prop', () => {
    const htmlContent = { __html: 'Urgent notification' };
    render(<NotificationItem type="urgent" html={htmlContent} />);
    const item = screen.getByText('Urgent notification');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
  });
});
