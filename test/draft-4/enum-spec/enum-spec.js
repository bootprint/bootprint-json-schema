/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
const expect = require('chai').expect

const {select} = require('../../utils')

const tester = require('bootprint-unit-testing')

describe('draft-04: enum', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink to the draft-04-schema', function () {
    expect(bptest.$(select('mixed', 'enum', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('mixed', 'enum', '> .header')))
      .to.equal('Enum (allowed values) (5.5.1)')
  })

  it('should display the enum values for mixed enums', function () {
    expect(bptest.textIn(select('mixed', 'enum', '> .contents')))
      .to.equal('{ "a": "object"} [ "an", "array"] 1 "a string" true')
  })

  it('should display the enum values for string enums', function () {
    expect(bptest.textIn(select('stringEnum', 'enum', '> .contents')))
      .to.equal('"abc" "def" "ghi"')
  })

  it('should display the enum values for number enums', function () {
    expect(bptest.textIn(select('numberEnum', 'enum', '> .contents')))
      .to.equal('1 2 3')
  })

  it('should display the enum values for object enums', function () {
    expect(bptest.textIn(select('objectEnum', 'enum', '> .contents')))
      .to.equal('{ "a": 1} { "b": "Nils"}')
  })
})
