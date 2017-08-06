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

var tester = require('bootprint-unit-testing')

const { select } = require('../../utils')

describe('draft-06: Numeric-restrictions', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display a lower bounded range for age', function () {
    expect(bptest.textIn(select('age', 'minimum', '.contents')).trim())
      .to.equal('x ≥ 0')
  })

  it('should display a the doclink to the draft-04-schema', function () {
    expect(bptest.$(select('age', 'minimum', '.header a:first-child')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.4')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('age', 'minimum', '> .header')))
      .to.equal('Numeric range (6.4, 6.2, 6.5, 6.3)')
  })

  it('should have a upper bounded range for bestFriends', function () {
    expect(
      bptest.textIn(select('bestFriends', 'minimum', '.contents')))
      .to.equal('x ≤ 5')
  })

  it('should have a bounded range with exclusive boundaries for two_to_three', function () {
    expect(bptest.textIn(select('two_to_three', 'minimum', '.contents')))
      .to.equal('2 < x < 3')
  })

  it('should have a lower bounded range with exclusive boundaries for more_than_two', function () {
    expect(bptest.textIn(select('more_than_two', 'minimum', '.contents')))
      .to.equal('x > 2')
  })

  it('should have a upper bounded range with exclusive boundaries for less_than_three', function () {
    expect(bptest.textIn(select('less_than_three', 'minimum', '.contents')))
      .to.equal('x < 3')
  })

  it('should display multipleOf-properties', function () {
    expect(bptest.textIn(select('multiples_of_three', 'multipleOf', '.contents')))
      .to.equal('x must be a multiple of 3')
  })

  it('should display a the doclink to the draft-05-schema (multipleOf)', function () {
    expect(bptest.$(select('multiples_of_three', 'multipleOf', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.1')
  })

  it('should display the correct explanation text (multipleOf)', function () {
    expect(bptest.textIn(select('multiples_of_three', 'multipleOf', '> .header')))
      .to.equal('Multiple of (6.1)')
  })

  it('should display multiple restrictions', function () {
    expect(bptest.textIn(select('all_restrictions', 'multipleOf', '.contents')))
      .to.equal('x must be a multiple of 3')
    expect(bptest.textIn(select('all_restrictions', 'minimum', '.contents')))
      .to.equal('2 < x < 16')
  })

  it('should display the smaller range created by inclusive and exclusive restrictions (inclusive range wins)', function () {
    expect(bptest.textIn(select('inclusive_range_wins', 'minimum', '.contents')))
      .to.equal('2 ≤ x ≤ 16')
  })

  it('should display the smaller range created by inclusive and exclusive restrictions (exclusive range wins)', function () {
    expect(bptest.textIn(select('inclusive_range_wins', 'minimum', '.contents')))
      .to.equal('2 ≤ x ≤ 16')
  })

  it('should display the exclusive range, if minimum/maxmium and minimumExclusive/maximumExclusive equal because it is smaller', function () {
    expect(bptest.textIn(select('exclusive_equals_inclusive', 'minimum', '.contents')))
      .to.equal('2 < x < 16')
  })

  it('should not write numeric restrictions for strings', function () {
    expect(bptest.textIn(select('string_with_range', 'minimum', '.contents')))
      .to.equal('')
    expect(bptest.textIn(select('string_with_range', 'multipleOf', '.contents')))
      .to.equal('')
  })
})
