/*!
 * bootprint-json-schema <https://github.com/nknapp/bootprint-json-schema>
 *
 * Copyright (c) 2017 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
const expect = require('chai').expect

const tester = require('bootprint-unit-testing')
const {select} = require('../../utils')

describe('draft-05: types', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should show simple types', function () {
    expect(bptest.textIn(select('simpleInteger', 'type', ''))).to.equal('Type (5.21) integer')
    expect(bptest.textIn(select('simpleString', 'type', ''))).to.equal('Type (5.21) string')
  })

  it('should show alternative types separated by "or"', function () {
    expect(bptest.textIn(select('stringOrInteger', 'type', ''))).to.equal('Type (5.21) string or integer')
  })

  it('should not show unspecified types', function () {
    expect(bptest.textIn(select('unspecified', 'type', ''))).to.equal('')
  })

  it('should show an array as "array<*>" if no items-type is specified', function () {
    expect(bptest.textIn(select('simpleArray', 'type', ''))).to.equal('Type (5.21) array<*>')
  })

  it('should apply items-types to the array type ', function () {
    expect(bptest.textIn(select('stringOrStringArray', 'type', ''))).to.equal('Type (5.21) string or array<string>')
  })

  it('should show array types with multiple item-types', function () {
    expect(bptest.textIn(select('multiTypeArray', 'type', ''))).to.equal('Type (5.21) array<string|integer>')
  })
})
