// utils.js

// Existing exports
export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
      return 'Holberton School';
  } else {
      return 'Holberton School main dashboard';
  }
}

// Add this new function
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
