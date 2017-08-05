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

describe('draft-06: object-spec', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  describe('the properties keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'properties', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.18')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'properties', '> .header')))
        .to.equal('Properties (6.18)')
    })

    it('should display the property-schemas', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'properties', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('string integer number')
    })
  })

  describe('the additionalProperties keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'additionalProperties', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.20')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'additionalProperties', '> .header')))
        .to.equal('Additional Properties (6.20)')
    })

    it('should display the property-schemas', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'additionalProperties', '> .contents')))
        .to.equal('Type (6.25) array<string> Items (6.9) Type (6.25) string')
    })
  })

  describe('the patternProperties keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'patternProperties', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.19')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'patternProperties', '> .header')))
        .to.equal('Pattern Properties (6.19)')
    })

    it('should display the property-schemas', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'patternProperties', '> .contents')))
        .to.equal('/another.*/ Type (6.25) integer')
    })
  })

  describe('the required-keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'required', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.17')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'required', '> .header')))
        .to.equal('Required Properties (6.17)')
    })

    it('should display the names of the required properties', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'required', '> .contents')))
        .to.equal('name, age and anotherOne')
    })

    it('should mark properties from the "properties"-keyword as "required"', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'properties', '> .contents > > .json-schema--subschema-header')))
        .to.equal('name required age required shoeSize')
    })
  })

  describe('the dependencies-keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'dependencies', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.21')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'dependencies', '> .header')))
        .to.equal('Dependencies (6.21)')
    })

    it('should display property-dependencies', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'dependencies', '> .contents > .json-schema--subschema:first-child')))
        .to.equal('If apples is a property, pears, bananas and melons must exist as properties as well')
    })

    it('should display schema-dependencies', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'dependencies', '> .contents > .json-schema--subschema:last-child')))
        .to.equal('If pi is a property, the entire object must also match Type (6.25) object Properties (6.18) bananas Type (6.25) integer')
    })
  })

  describe('the minProperties- and maxProperties-keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'minProperties', '.header a:first-child')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.15')
      expect(bptest.$(select('all-object-restrictions', 'minProperties', '.header a:last-child')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.16')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'minProperties', '> .header')))
        .to.equal('Object Size (6.15, 6.16)')
    })

    it('should render "a to b properties" for bounded object sizes', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'minProperties', '> .contents')))
        .to.equal('2 to 5 properties')
    })
  })

  describe('the propertyNames keyword', function () {
    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select('all-object-restrictions', 'propertyNames', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.22')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'propertyNames', '> .header')))
        .to.equal('Property Names (6.22)')
    })

    it('should display the propertyNames-schema', function () {
      expect(bptest.textIn(select('all-object-restrictions', 'propertyNames', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('string')
    })
  })
})
