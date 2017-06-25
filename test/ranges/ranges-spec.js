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

describe('The ranges-fixture', function () {
  this.timeout(10000)
  var bptest = tester(require('../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should have a lower bounded range for age', function () {
    expect(bptest.$('dt[data-property-name="age"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('age: integer, { x ∈ ℤ | x ≥ 0 }')
  })

  it('should have a upper bounded range for bestFriends', function () {
    expect(bptest.$('dt[data-property-name="bestFriends"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('bestFriends: integer, { x ∈ ℤ | x ≤ 5 }')
  })

  it('should have a bounded range with exclusive boundaries for two_to_three', function () {
    expect(bptest.$('dt[data-property-name="two_to_three"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('two_to_three: number, { x ∈ ℝ | 2 < x < 3 }')
  })

  it('should have a lower bounded range with exclusive boundaries for more_than_two', function () {
    expect(bptest.$('dt[data-property-name="more_than_two"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('more_than_two: number, { x ∈ ℝ | x > 2 }')
  })

  it('should have a upper bounded range with exclusive boundaries for less_than_three', function () {
    expect(bptest.$('dt[data-property-name="less_than_three"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('less_than_three: number, { x ∈ ℝ | x < 3 }')
  })

  it('should not write a range for strings', function () {
    expect(bptest.$('dt[data-property-name="string_with_range"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('string_with_range: string')
  })

  it('should have a lower length bound for string_min_length', function () {
    expect(bptest.$('dt[data-property-name="string_min_length"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('string_min_length: string, at least 2 chars')
  })

  it('should have an upper length bound for string_max_length', function () {
    expect(bptest.$('dt[data-property-name="string_max_length"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('string_max_length: string, up to 5 chars')
  })

  it('should have an bounded length for string_min_max_length', function () {
    expect(bptest.$('dt[data-property-name="string_min_max_length"]').text().replace(/\s+/g, ' ').trim())
      .to.equal('string_min_max_length: string, 2 to 5 chars')
  })
})
