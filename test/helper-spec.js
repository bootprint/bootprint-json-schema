/* global describe */
/* global it */

var expect = require('chai').expect

var helpers = require('../handlebars/helpers.js')
var Handlebars = require('handlebars').create()
Handlebars.registerHelper(helpers)

function run (template, json) {
  return Handlebars.compile(template)(json)
}

describe('The Handlebars-helpers:', function () {
  describe('the json-schema--datatype helper', function () {
        // Call the datatype-helper
    function dt (obj) {
      return run('{{json-schema--datatype type}}', {type: obj})
    }

    it('should handle undefined gracefully', function () {
      expect(dt(undefined)).to.equal('')
    })

    it('should handle null gracefully', function () {
      expect(dt(null)).to.equal('')
    })

    it('should return an empty string for composite schema, since they are rendered in  partials null and undefined gracefully', function () {
      expect(dt({ anyOf: [] })).to.equal('')
      expect(dt({ oneOf: [] })).to.equal('')
      expect(dt({ allOf: [] })).to.equal('')
    })

    it('should treat unspecific types as object', function () {
      expect(dt({})).to.equal('object')
    })

    it('should treat unspecific array types as object[]', function () {
      expect(dt({ type: 'array' })).to.equal('object[]')
    })

    it('should treat arrays with unspecific types object[]', function () {
      expect(dt({ type: 'array', items: {} })).to.equal('object[]')
    })

    it('should write type[] for specific arrays', function () {
      expect(dt({ type: 'array', items: { type: 'string' } })).to.equal('string[]')
    })

    it('should write recurse multiple steps of array types', function () {
      expect(dt({ type: 'array', items: { type: 'array', items: { type: 'string' } } })).to.equal('string[][]')
    })
  })
})
