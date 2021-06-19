/**
 * @param {string} dateString
 * @returns {string}
 */

export function dayName(dateString) {
  let date = Date.parse(dateString);
  let formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
  return formatter.format(date);
}

/**
 * @param {string} monthString
 * @returns {string}
 */

export function dateName(monthString) {
  let date = Date.parse(monthString);
  let formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    timeZone: "UTC",
  });
  return formatter.format(date);
}
