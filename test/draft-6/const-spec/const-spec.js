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

describe('draft-06: const', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink to the draft-06-schema', function () {
    expect(bptest.$(select('stringConst', 'const', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.24')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('stringConst', 'const', '> .header')))
      .to.equal('Constant value (6.24)')
  })

  it('should display the constant string value', function () {
    expect(bptest.textIn(select('stringConst', 'const', '> .contents')))
      .to.equal('"abc"')
  })

  it('should display the constant number value', function () {
    expect(bptest.textIn(select('numberConst', 'const', '> .contents')))
      .to.equal('1')
  })

  it('should display the constant object value', function () {
    expect(bptest.textIn(select('objectConst', 'const', '> .contents')))
      .to.equal('{ "a": 1}')
  })
})
