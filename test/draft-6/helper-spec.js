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

describe('The Handlebars-helpers (draft-06 specific)', function () {
  describe('the json_schema__number_range helper', function () {
    // Call the datatype-helper
    function range06 (obj) {
      return run('{{{json_schema__number_range range}}}', {$explicitSchemaVersion: 'draft-06', range: obj})
    }

    it('should handle empty ranges gracefully', function () {
      expect(range06({})).to.equal('')
    })

    it('should handle empty integer ranges gracefully', function () {
      expect(range06({type: 'integer'})).to.equal('')
    })

    it('should handle empty number ranges gracefully', function () {
      expect(range06({type: 'number'})).to.equal('')
    })

    it('should render a range for only minimum', function () {
      expect(range06({minimum: 2, type: 'number'})).to.equal('x ≥ 2')
    })

    it('should render a range for only maximum', function () {
      expect(range06({maximum: 2, type: 'number'})).to.equal('x ≤ 2')
    })

    it('should render a range with minimum and maximum', function () {
      expect(range06({maximum: 2, minimum: 0, type: 'number'})).to.equal('0 ≤ x ≤ 2')
    })

    it('should render a open range with minimumExclusive', function () {
      expect(range06({exclusiveMinimum: 0, type: 'number'})).to.equal('x > 0')
    })

    it('should render a open range with maximumExclusive', function () {
      expect(range06({exclusiveMaximum: 2, type: 'number'})).to.equal('x < 2')
    })

    it('should render a range with minimumExclusive and maximum', function () {
      expect(range06({
        maximum: 2,
        exclusiveMinimum: 0,
        type: 'number'
      })).to.equal('0 < x ≤ 2')
    })

    it('should render a range with minimum and maximumExclusive', function () {
      expect(range06({
        exclusiveMaximum: 2,
        minimum: 0,
        type: 'number'
      })).to.equal('0 ≤ x < 2')
    })

    it('should render the correct set-symbol for integers', function () {
      expect(range06({type: 'integer', minimum: 0})).to.equal('x ≥ 0')
    })
  })
})
