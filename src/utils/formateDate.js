/**
 * Formats a date using Intl.DateTimeFormat
 * @param {string|Date} date - Date object or date string
 * @param {Object} options - Intl.DateTimeFormat options (customize formatting)
 * @param {string} locale - Locale string, defaults to "en-US"
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}, locale = 'en-US') {
  if (!date) return '';

  const parsedDate = date instanceof Date ? date : new Date(date);

  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(parsedDate);
}
