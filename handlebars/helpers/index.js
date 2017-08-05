/* eslint-disable camelcase */

/**
 * Default Handlebars-helpers for `bootprint-json-schema`
 * @name helpers
 */
module.exports = {
  json_schema__doclink,
  json_schema__datatype,
  json_schema__number_range,
  json_schema__subschema_name,
  json_schema__definition_id,
  json_schema__could_be_numeric,
  json_schema__could_be_of_type,
  json_schema__is_array,
  json_schema__split_coma,
  json_schema__is_required,
  json_schema__has_any,
  json_schema__enumerate,
  json_schema__count_range,
  json_schema__if_version
}

const {htmlId} = require('bootprint-base/handlebars/helpers')
const {safe} = require('./utils')

const versionDispatch = {
  'draft-04': require('./helpers-draft-04'),
  'draft-06': require('./helpers-draft-06')
}

const schemaByUrl = {
  'http://json-schema.org/draft-04/schema#': 'draft-04',
  'http://json-schema.org/draft-06/schema#': 'draft-06'
}

/**
 * Render a link to a json-schema docs section from the json-schema documentation.
 * If the section does not exist, it is assumed to be a vendor extension.
 * The mapping of names to section numbers can be found in the version-specific helper
 * files.
 *
 * @param {string} type the type of section (keywords, formats)
 * @param {string} sectionName the section name (e.g. items)
 * @param {object} options the Handlebars options
 * @return {string|Handlebars.SafeString} a SafeString containing a link to the documentation or
 *   'vender extension' if there is no section of the given name
 * @access public
 * @memberOf helpers
 */
function json_schema__doclink (type, sectionName, options) {
  let version = determineVersion(options)
  let {docLink, sections} = versionDispatch[version].metadata

  let section = sections[type][sectionName]
  if (section) {
    return safe`<a href="${docLink}#section-${section}">${section}</a>`
  } else {
    return 'vendor extension'
  }
}

/**
 * Executes the helper-block, if the version matches any of the
 * specified target versions
 * @param {...string} targetVersions a list of schema-versions to match against (varargs)
 * @access public
 * @memberOf helpers
 */
function json_schema__if_version (...targetVersions /*, options */) {
  const options = targetVersions[targetVersions.length - 1]
  targetVersions = targetVersions.slice(0, targetVersions.length - 1)
  const schemaVersion = determineVersion(options)
  if (targetVersions.indexOf(schemaVersion) >= 0) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

/**
 * Returns the datatype of a schema as short formal string like `array<string|integer>`
 *
 * @param {object} schema a json-schema
 * @param {string|string[]} types one or more types of potentially multiple types in the schema that should be used right now.
 * @returns {String} a string like `array<string|integer>`
 * @access public
 * @memberOf helpers
 */
function json_schema__datatype (schema, types) {
  if (schema == null) {
    return null
  }
  /**
   * The type(s) that are processed
   * @type {string|string[]}
   */
  if (types == null) {
    return '*'
  }
  if (Array.isArray(types)) {
    // "type" is an array (i.e. multiple types) -> process each type
    return types.map(type => json_schema__datatype(schema, type)).join('|')
  }
  // "type" is a string
  if (types === 'array') {
    let items = schema.items || {}
    return `array<${json_schema__datatype(items, items.type)}>`
  }
  return types
}

/**
 * Return a string for the numeric range restriction of the given schema
 * (as determined by `minimum`, `maximum`, `exclusiveMinimum` and `exclusiveMaximum`
 * properties).
 *
 * The implementation is dispatched to version-specific behavior because `draft-04`
 * and `draft-05` differ from `draft-06`
 * @param {object} schema the current (sub-)schema
 * @param {object} options the Handlebars options
 * @returns {string} a string like `1 < x < 2` or `x ≤ 5`
 * @access public
 * @memberOf helpers
 */
function json_schema__number_range (schema, options) {
  let {json_schema__number_range} = versionDispatch[determineVersion(options)]
  return json_schema__number_range(schema)
}

/**
 * Determine the schema-version from the data.
 * The property `$explicitSchemaVersion` of the data object
 * can contain an explicit version.
 * If it does not exist, the version will be derived from the $schema-property.
 * As a fallback, "draft-04" will be expected
 *
 * @param options the Handlebars options-object
 * @returns {string}
 * @access private
 */
function determineVersion (options) {
  if (!options || !options.data || !options.data.root) {
    throw new Error('Expected \'options\' to be a Handlebars options object')
  }
  const root = options.data.root
  return root['$explicitSchemaVersion'] || schemaByUrl[root.$schema] || 'draft-04'
}

/**
 * Compute the element-id for a definition panel
 * @param {string} name the name of the definition (the key within the definitions object)
 * @returns {string} an id without invalid characters for HTML-ids
 * @access public
 * @memberOf helpers
 */
function json_schema__definition_id (name) {
  return `definitions-${htmlId(name)}`
}

/**
 * Returns a prose-description of a number of things (e.g. "at least one item", "2 to 5 items")
 * @param {number=} min the lower bound
 * @param {number=} max the upper bound
 * @param {string} singular the "thing" in it singular form
 * @param {string} plural the "thing" it its plural form
 * @returns {string|null} a prose-description or `null` if there is no range
 * @access public
 * @memberOf helpers
 */
function json_schema__count_range (min, max, singular, plural) {
  if (min == null && max == null) return null
  if (min === 0 && max == null) return null
  if (max === 0) return `no ${plural}`
  if (min === 1 && max == null) return `at least one ${singular}`
  if (min == null && max === 1) return `at most one ${singular}`
  if (min === 1 && max === 1) return `exactly one ${singular}`

  if (min != null && max == null) return `at least ${min} ${plural}`
  if (min == null && max != null) return `at most ${max} ${plural}`
  if (min === max) return `exactly ${max} ${plural}`

  return `${min} to ${max} ${plural}`
}

/**
 * Extract then name of a subschema from a $ref property
 * @param {string} url
 * @returns {*}
 * @access public
 * @memberOf helpers
 */
function json_schema__subschema_name (url) {
  return url.replace('#/definitions/', '')
}

/**
 * Returns "true", if the given propertyName is among the required properties
 * of a schema
 * @param {object} schema the json-schema to check for required properties of
 * @param {string} propertyName the property the name of the property
 * @returns {boolean} true, if the given propertyName is required
 * @access public
 * @memberOf helpers
 */
function json_schema__is_required (schema, propertyName) {
  return schema.required && schema.required.indexOf(propertyName) >= 0
}
/**
 * Return true, if the type is numeric (integer or number) or *could be numeric*
 *
 * The type *could be* numeric, if it is an array that includes number or integer,
 * or if it is not specified.
 *
 * @this {undefined|string|string[]} the json-schema oject
 * @return {boolean} true, if the type could be numeric
 * @access public
 * @memberOf helpers
 */
function json_schema__could_be_numeric () {
  const couldBeA = json_schema__could_be_of_type.bind(this)
  return couldBeA('number') || couldBeA('integer')
}

/**
 * Return true, if the dataType of a schema could be a given type
 *
 * This includes an undefined `type` property, an array `type`-property that includes
 * the checke values and a string `type'-property that equals the checked value.
 *
 * @param {string} type the type to check the schema against
 * @returns {boolean} true, if the type of the schema could be the parameter
 * @access public
 * @memberOf helpers
 */
function json_schema__could_be_of_type (type) {
  const actualType = this.type
  return actualType === null || // type not defined
    actualType === undefined ||
    actualType === type || // explicit check matches
    (Array.isArray(actualType) && actualType.indexOf(type) >= 0) // array contains type
}

/**
 * Splits a coma-separated list into an array.
 *
 * This helper can be used as nested-helper for other helpers that expect arrays
 *
 * @param {string} list a coma-separated list of strings
 * @return {string[]} the list items as array
 * @access public
 * @memberOf helpers
 */
function json_schema__split_coma (list) {
  return list.split(',').map(item => item.trim())
}

/**
 * Returns true, if the value is an array
 * @param {*} value the value
 * @returns {boolean} true, if the value is an array
 * @access public
 * @memberOf helpers
 */
function json_schema__is_array (value) {
  return Array.isArray(value)
}

/**
 * Checks, if the given schema contains any of the provided keywords (like "type" or "items")
 *
 * @param {object} schema a json-schema
 * @param {...string} keywords a list of keywords to check again
 * @returns {boolean} true, if any of the keywords exists in the schema
 * @access public
 * @memberOf helpers
 */
function json_schema__has_any (schema, ...keywords) {
  // remove Handlebars options from keywords before searching
  return !!keywords.slice(0, keywords.length - 1)
    .find(keyword => schema[keyword] != null)
}

/**
 * Convert an array into a prose-enumeration
 * @param {string[]} items an array of strings (e.g. ['a','b','c'])
 * @return {string} a written enumeration (a,b and c)
 * @access public
 * @memberOf helpers
 */
function json_schema__enumerate (items, options) {
  return items.map((item, index, array) => {
    item = options.fn(item)
    // Add coma after each but the two last items
    if (index < array.length - 2) {
      return item + ', '
    }
    // Add "and" after the next-to-last item
    if (index === array.length - 2) {
      return item + ' and '
    }
    return item
  }).join('')
}
