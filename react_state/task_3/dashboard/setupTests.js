import '@testing-library/jest-dom';

// Mock window.alert globally
beforeAll(() => {
  global.alert = jest.fn(); // Mock the alert function
});

// Restore the mock after all tests
afterAll(() => {
  jest.restoreAllMocks();
});
