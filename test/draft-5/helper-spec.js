/* global describe */
/* global it */

const chai = require('chai')
const expect = chai.expect
chai.use(require('dirty-chai'))

var helpers = require('../../handlebars/helpers/index')
var Handlebars = require('handlebars').create()
Handlebars.registerHelper(helpers)

function run (template, json) {
  return Handlebars.compile(template)(json)
}

describe('The Handlebars-helpers (draft-05 specific)', function () {
  describe('the json_schema__number_range helper', function () {
    // Call the datatype-helper
    function range (obj) {
      return run('{{{json_schema__number_range range}}}', {range: obj})
    }

    it('should handle empty ranges gracefully', function () {
      expect(range({})).to.equal('')
    })

    it('should handle empty integer ranges gracefully', function () {
      expect(range({type: 'integer'})).to.equal('')
    })

    it('should handle empty number ranges gracefully', function () {
      expect(range({type: 'number'})).to.equal('')
    })

    it('should render a range for only minimum', function () {
      expect(range({minimum: 2, type: 'number'})).to.equal('x ≥ 2')
    })

    it('should render a range for only maximum', function () {
      expect(range({maximum: 2, type: 'number'})).to.equal('x ≤ 2')
    })

    it('should render a range with minimum and maximum', function () {
      expect(range({maximum: 2, minimum: 0, type: 'number'})).to.equal('0 ≤ x ≤ 2')
    })

    it('should render a open range with minimumExclusive', function () {
      expect(range({minimum: 0, exclusiveMinimum: true, type: 'number'})).to.equal('x > 0')
    })

    it('should render a open range with maximumExclusive', function () {
      expect(range({maximum: 2, exclusiveMaximum: true, type: 'number'})).to.equal('x < 2')
    })

    it('should render a range with minimumExclusive and maximum', function () {
      expect(range({
        maximum: 2,
        minimum: 0,
        exclusiveMinimum: true,
        type: 'number'
      })).to.equal('0 < x ≤ 2')
    })

    it('should render a range with minimum and maximumExclusive', function () {
      expect(range({
        maximum: 2,
        exclusiveMaximum: true,
        minimum: 0,
        type: 'number'
      })).to.equal('0 ≤ x < 2')
    })

    it('should render the correct set-symbol for integers', function () {
      expect(range({type: 'integer', minimum: 0})).to.equal('x ≥ 0')
    })
  })
})
