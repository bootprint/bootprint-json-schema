var util = require('util')

/* eslint-disable camelcase */

/**
 * Handlebars helpers for `bootprint-json-schema`
 * @name helpers
 */
module.exports = {
  json_schema__datatype,
  json_schema__range
}

/**
 * Returns a descriptive string for a datatype
 * @param {object} value a json-schema datatype-object
 * @returns {String} a string like <code>string[]</code> or <code>object[][]</code>
 * @access public
 * @memberOf helpers
 */
function json_schema__datatype (value) {
  if (!value) return null
  if (value['anyOf'] || value['allOf'] || value['oneOf']) {
    return ''
  }
  if (!value.type) {
    return 'object'
  }
  if (value.type === 'array') {
    return json_schema__datatype(value.items || {}) + '[]'
  }
  return value.type
}

/**
 *
 * @param range a json-schema object with minimum, maximum, exclusiveMinimum, exclusiveMaximum
 * @param {number=} [range.minimum]
 * @param {number=} [range.maximum]
 * @param {string} [range.type] the json-type (integer, or number)
 * @param {boolean} [range.minimumExclusive]
 * @param {boolean} [range.maximumExclusive]
 * @access public
 * @memberOf helpers
 */
function json_schema__range (range) {
  var hasMinimum = range.minimum || range.minimum === 0
  var hasMaximum = range.maximum || range.maximum === 0

  if (!hasMinimum && !hasMaximum) {
    // There is no range
    return ''
  }

  var numberSet = ''
  if (range.type === 'integer') {
    numberSet = '\u2208 \u2124' // ELEMENT OF - DOUBLE-STRUCK CAPITAL Z
  } else if (range.type === 'number') {
    numberSet = '\u2208 \u211D' // ELEMENT OF - DOUBLE-STRUCK CAPITAL R
  }

  if (hasMinimum && !hasMaximum) {
    return util.format(', { x %s | x %s %d }',
      numberSet,
      range.minimumExclusive ? '>' : '\u2265',
      range.minimum)
  } else if (hasMaximum && !hasMinimum) {
    return util.format(', { x %s | x %s %d }',
      numberSet,
      range.maximumExclusive ? '<' : '\u2264',
      range.maximum)
  } else {
    // if (hasMaxmium && hasMinimum)
    return util.format(', { x %s | %d %s x %s %d }',
      numberSet,
      range.minimum,
      range.minimumExclusive ? '<' : '\u2264',
      range.maximumExclusive ? '<' : '\u2264',
      range.maximum)
  }
}
