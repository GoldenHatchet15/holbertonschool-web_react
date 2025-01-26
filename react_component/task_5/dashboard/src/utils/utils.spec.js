import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions', () => {
    // Test getCurrentYear
    test('getCurrentYear returns the current year', () => {
      const year = new Date().getFullYear();
      expect(getCurrentYear()).toBe(year);
    });
  
    // Test getFooterCopy
    describe('getFooterCopy', () => {
      test('returns correct string when true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
      });
      test('returns correct string when false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
      });
    });
  
    // Test getLatestNotification
    test('getLatestNotification returns the correct HTML string', () => {
      expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
  });
  