module.exports = {
  select
}

/**
 * Returns a cheerio-selector for the an element within the section of a definition
 * @param {string} definition key of the definitions-object
 * @param {string} keyword the keyword section to check
 * @param {string} selector a selector for elements within the section
 * @returns {string}
 */
function select (definition, keyword, selector) {
  selector = selector || ''
  return `#definitions-${definition} > .panel-body > .json-schema--schema > section.json-schema--section[data-keywords*="${keyword}"] ${selector}`
}
