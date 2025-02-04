import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite style injection during testing
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  test('renders the correct HTML with type and value props', () => {
    render(<NotificationItem type="default" value="Test notification" id={1} markAsRead={() => {}} />);
    const item = screen.getByText('Test notification');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  test('applies correct attributes for default and urgent notifications', () => {
    const { rerender } = render(
      <NotificationItem type="default" value="Default notification" id={1} markAsRead={() => {}} />
    );
    const defaultItem = screen.getByText('Default notification');
    expect(defaultItem).toHaveAttribute("data-notification-type", "default");

    rerender(
      <NotificationItem type="urgent" value="Urgent notification" id={2} markAsRead={() => {}} />
    );
    const urgentItem = screen.getByText('Urgent notification');
    expect(urgentItem).toHaveAttribute("data-notification-type", "urgent");
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
