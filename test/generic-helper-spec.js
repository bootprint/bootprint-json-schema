/* global describe */
/* global it */

const chai = require('chai')
const expect = chai.expect
chai.use(require('dirty-chai'))

var helpers = require('../handlebars/helpers/index')
var Handlebars = require('handlebars').create()
Handlebars.registerHelper(helpers)

describe('The Handlebars-helpers (version-independent):', function () {
  describe('version detection', function () {
    let NO_HANDLEBARS_OPTIONS = 'Expected \'options\' to be a Handlebars options object'

    it('should fail with an appropriate exception, if no "options"-parameter is provided', function () {
      // Handlebars options-object is missing...
      expect(() => helpers.json_schema__doclink('keywords', 'type', null)).to.throw(NO_HANDLEBARS_OPTIONS)
    })

    it('should fail with an appropriate exception, if "options" does not contain "data"', function () {
      // Handlebars options-object is missing...
      expect(() => helpers.json_schema__doclink('keywords', 'type', {})).to.throw(NO_HANDLEBARS_OPTIONS)
    })

    it('should fail with an appropriate exception, if "options.data" does not contain "root"', function () {
      // Handlebars options-object is missing...
      expect(() => helpers.json_schema__doclink('keywords', 'type', {data: {}})).to.throw(NO_HANDLEBARS_OPTIONS)
    })
  })

  describe('the helper "json_schema__could_be_numeric"', function () {
    function testWith (schemaObject) {
      return helpers.json_schema__could_be_numeric.call(schemaObject)
    }

    it('should return true, if the type is integer', function () {
      expect(testWith({type: 'integer'})).to.be.true()
    })
    it('should return true, if the type is number', function () {
      expect(testWith({type: 'number'})).to.be.true()
    })
    it('should return true, if the type is undefined', function () {
      expect(testWith({})).to.be.true()
    })
    it('should return true, if the integer is part of the type-array', function () {
      expect(testWith({type: ['string', 'integer']})).to.be.true()
    })
    it('should return true, if the numeber is part of the type-array', function () {
      expect(testWith({type: ['string', 'number']})).to.be.true()
    })
    it('should return false, if type is string', function () {
      expect(testWith({type: 'string'})).to.be.false()
    })
    it('should return false, if type is an array without number or integer', function () {
      expect(testWith({type: ['string', 'object']})).to.be.false()
    })
  })

  describe('the helper "json_schema__could_be_of_type"', function () {
    function testWith (type, schemaObject) {
      return helpers.json_schema__could_be_of_type.call(schemaObject, type)
    }

    it('should return true, if the type matches directly', function () {
      expect(testWith('string', {type: 'string'})).to.be.true()
    })
    it('should return true, if the type is undefined', function () {
      expect(testWith('string', {})).to.be.true()
    })
    it('should return true, if the type is part of the type-array', function () {
      expect(testWith('string', {type: ['string', 'integer']})).to.be.true()
    })
    it('should return false, if type does not match', function () {
      expect(testWith('string', {type: 'object'})).to.be.false()
    })
    it('should return false, if type is an array without the expected type', function () {
      expect(testWith('array', {type: ['string', 'object']})).to.be.false()
    })
  })

  describe('the json_schema__datatype helper', function () {
    // Call the datatype-helper
    function dt (obj, types) {
      // The callee of the helper should always pass 2 arguments
      types = types || (obj && obj.type)
      return helpers.json_schema__datatype.call({}, obj, types)
    }

    it('should handle undefined gracefully', function () {
      expect(dt(undefined)).to.be.null()
    })

    it('should handle null gracefully', function () {
      expect(dt(null)).to.be.null()
    })

    it('should return any, if no type is specified ', function () {
      expect(dt({})).to.equal('*')
    })

    it('should concatate multiple types with a pipe', function () {
      expect(dt({type: ['string', 'integer']})).to.equal('string|integer')
    })

    it('should treat arrays with unspecific types as array<*>', function () {
      expect(dt({type: 'array', items: {}})).to.equal('array<*>')
    })

    it('should write type[] for specific arrays', function () {
      expect(dt({type: 'array', items: {type: 'string'}})).to.equal('array<string>')
    })

    it('should write recurse multiple steps of array types', function () {
      expect(dt({type: 'array', items: {type: 'array', items: {type: 'string'}}})).to.equal('array<array<string>>')
    })

    it('should write concatenated types as generic array paramters', function () {
      expect(dt({type: 'array', items: {type: ['string', 'integer']}})).to.equal('array<string|integer>')
    })

    it('should write array-items only to the array type of a multi-type', function () {
      expect(dt({type: ['integer', 'array'], items: {type: ['string']}})).to.equal('integer|array<string>')
    })
  })

  describe('the json_schema__count_range helper', function () {
    let count = helpers.json_schema__count_range

    it('should handle a minimum 0 as number (not as false)', function () {
      expect(count(0, 2, 'item', 'items')).to.equal('0 to 2 items')
    })

    it('should write "no items" for "0 to 0 items"', function () {
      expect(count(0, 0, 'item', 'items')).to.equal('no items')
    })

    it('should write "no items" for "at most 0 items"', function () {
      expect(count(undefined, 0, 'item', 'items')).to.equal('no items')
    })

    it('should return null for an undefined range', function () {
      expect(count(undefined, undefined, 'item', 'items')).to.be.null()
    })

    it('should treat "at least 0 items" like an undefined range', function () {
      expect(count(0, undefined, 'item', 'items')).to.be.null()
    })

    it('use singular form for exactly one item', function () {
      expect(count(1, 1, 'item', 'items')).to.equal('exactly one item')
    })

    it('use singular form for lower bound of one item', function () {
      expect(count(1, undefined, 'item', 'items')).to.equal('at least one item')
    })

    it('use singular form for upper bound of one item', function () {
      expect(count(undefined, 1, 'item', 'items')).to.equal('at most one item')
    })

    it('use plural form for lower bound of multiple items', function () {
      expect(count(2, undefined, 'item', 'items')).to.equal('at least 2 items')
    })

    it('use plural form for upper bound of one item', function () {
      expect(count(undefined, 2, 'item', 'items')).to.equal('at most 2 items')
    })

    it('write bounded ranges (upper and lower) as plural', function () {
      expect(count(2, 6, 'item', 'items')).to.equal('2 to 6 items')
    })

    it('write "exactly n item" when minimum and maximum are equal', function () {
      expect(count(6, 6, 'item', 'items')).to.equal('exactly 6 items')
    })
  })
})
