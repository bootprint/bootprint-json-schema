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

describe('draft-04: Numeric-restrictions', function () {
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
      .to.equal('https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3')
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

  it('should display multiple restrictions', function () {
    expect(bptest.textIn(select('all_restrictions', 'multipleOf', '.contents')))
      .to.equal('x must be a multiple of 3')
    expect(bptest.textIn(select('all_restrictions', 'minimum', '.contents')))
      .to.equal('2 < x < 16')
  })

  it('should not write numeric restrictions for strings', function () {
    expect(bptest.textIn(select('string_with_range', 'minimum', '.contents')))
      .to.equal('')
    expect(bptest.textIn(select('string_with_range', 'multipleOf', '.contents')))
      .to.equal('')
  })
})
