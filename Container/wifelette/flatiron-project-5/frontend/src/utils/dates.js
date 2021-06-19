/**
 * @param {string} monthString
 * @returns {string}
 */
export function shortDate(monthString) {
  let date = Date.parse(monthString);
  let formatter = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
  });
  return formatter.format(date);
}
