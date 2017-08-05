const Handlebars = require('handlebars')

module.exports = {
  range,
  safe
}

/**
 * Render a range based on several
 * @param {number} min the minimal value or null if not present
 * @param {boolean} minExclusive whether "min" is outside the range
 * @param {number} max the maximal value or null if not present
 * @param {boolean} maxExclusive whether "max" is outside the range
 * @param {string} what a description for the current value
 */
function range (min, minExclusive, max, maxExclusive, what) {
  if (min != null && max != null) {
    return `${min} ${minExclusive ? '<' : '≤'} ${what} ${maxExclusive ? '<' : '≤'} ${max}`
  }
  if (min != null && max == null) {
    return `${what} ${minExclusive ? '>' : '≥'} ${min}`
  }
  if (min == null && max != null) {
    return `${what} ${maxExclusive ? '<' : '≤'} ${max}`
  }
  return null
}

/**
 * Creates a Handlebars.SafeString from a template-literal, escaping the injected values
 * @param strings
 * @param values
 */
function safe (strings, ...values) {
  let escapedValues = values.map(Handlebars.Utils.escapeExpression)
  let rawString = String.raw.apply(this, [strings].concat(escapedValues))
  return new Handlebars.SafeString(rawString)
}
