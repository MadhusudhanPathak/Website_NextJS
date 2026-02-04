/**
 * Utility functions for the website
 */

/**
 * Validates if a URL is valid
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Sanitizes a string for use in URLs or IDs
 * @param {string} str - The string to sanitize
 * @returns {string} - The sanitized string
 */
export const sanitizeString = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-'); // Remove leading/trailing hyphens
};

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in ms
 * @returns {Function} - The debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Formats a date string
 * @param {string|Date} date - The date to format
 * @param {Object} options - Formatting options
 * @returns {string} - The formatted date
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
};

/**
 * Checks if the current environment is client-side
 * @returns {boolean} - True if client-side, false otherwise
 */
export const isClientSide = () => {
  return typeof window !== 'undefined';
};

/**
 * Gets screen size breakpoints
 * @returns {string} - The current breakpoint
 */
export const getBreakpoint = () => {
  if (!isClientSide()) return 'mobile';
  
  const width = window.innerWidth;
  
  if (width >= 1280) return 'xl';
  if (width >= 1024) return 'lg';
  if (width >= 768) return 'md';
  if (width >= 640) return 'sm';
  return 'mobile';
};