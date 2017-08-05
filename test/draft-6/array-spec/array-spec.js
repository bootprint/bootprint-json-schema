/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
var expect = require('chai').expect

const {select} = require('../../utils')

const tester = require('bootprint-unit-testing')

describe('draft-06: array-spec', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  describe('the items keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('stringArray', 'items', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.9')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('stringArray', 'items', '> .header')))
        .to.equal('Items (6.9)')
    })

    it('should display the items-schemas', function () {
      expect(bptest.textIn(select('stringArray', 'items', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('string')
    })

    it('should display the composed type (including the item type)', function () {
      expect(bptest.textIn(select('stringArray', 'type', '> .contents')))
        .to.equal('array<string>')
    })

    it('should display the composed type for integers (including the item type)', function () {
      expect(bptest.textIn(select('restrictedIntegerArray', 'type', '> .contents')))
        .to.equal('array<integer>')
    })

    it('should display nested types', function () {
      expect(bptest.textIn(select('arrayOfStringArrays', 'type', '> .contents')))
        .to.equal('array<array<string>>')
    })

    it('should display alternative item types', function () {
      expect(bptest.textIn(select('multiTypeArray', 'type', '> .contents')))
        .to.equal('array<string|integer>')
    })
  })

  describe('the items keyword as array', function () {
    it('should not infer the item type', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'type', '> .contents')))
        .to.equal('array<*>')
    })

    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('fixedArrayItems', 'items', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.9')
    })

    it('should show the correct section header', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'items', '> .header')))
        .to.equal('Items (6.9)')
    })

    it('should display the schema of the first item along with its index', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'items', '> .contents > :nth-child(1)')))
        .to.match(/at index 0.*string.*at least 5 characters/)
    })

    it('should display the schema of the second item along with its index', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'items', '> .contents > :nth-child(2)')))
        .to.match(/at index 1.*number.*x ≤ 5/)
    })
  })

  describe('the contains keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('arrayContainsItem', 'contains', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.14')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('arrayContainsItem', 'contains', '> .header')))
        .to.equal('Contains (at least one) (6.14)')
    })

    it('should display the sub-schema of the contained item', function () {
      expect(bptest.textIn(select('arrayContainsItem', 'contains', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('integer')
    })
  })

  describe('the uniqueItems keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('uniqueArray', 'uniqueItems', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.13')
    })

    it('should show the correct section header', function () {
      expect(bptest.textIn(select('uniqueArray', 'uniqueItems', '> .header')))
        .to.equal('Unique Items (6.13)')
    })
    it('should render a fixed text if set to true', function () {
      expect(bptest.textIn(select('uniqueArray', 'uniqueItems', '> .contents')))
        .to.equal('Array items must be unique')
    })
  })

  describe('the array-length keywords', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('restrictedArrayLength', 'maxItems', '.header a:first-child')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.11')
    })

    it('should show the correct section header', function () {
      expect(bptest.textIn(select('restrictedArrayLength', 'maxItems', '> .header')))
        .to.equal('Array length (6.11, 6.12)')
    })
    it('should render "a to b items" for bounded array lengths', function () {
      expect(bptest.textIn(select('restrictedArrayLength', 'maxItems', '> .contents')))
        .to.equal('2 to 5 items')
    })
    it('should render "at most x items" for minimum array lengths', function () {
      expect(bptest.textIn(select('minimumArrayLength', 'maxItems', '> .contents')))
        .to.equal('at least 2 items')
    })
    it('should render "at least x items" for minimum array lengths', function () {
      expect(bptest.textIn(select('maximumArrayLength', 'maxItems', '> .contents')))
        .to.equal('at most 5 items')
    })
  })

  describe('the additionalItems keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('fixedArrayItems', 'additionalItems', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.10')
    })

    it('should show the correct section header', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'additionalItems', '> .header')))
        .to.equal('Additional Items (6.10)')
    })
    it('should render a the schema of the additional items', function () {
      expect(bptest.textIn(select('fixedArrayItems', 'additionalItems', '> .contents')))
        .to.match(/string.*at most 4 characters/)
    })
  })
})
