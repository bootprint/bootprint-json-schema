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

describe('draft-04: default-value', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink to the draft-04-schema', function () {
    expect(bptest.$(select('string', 'default', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('string', 'default', '> .header')))
      .to.equal('Default value (6.2)')
  })

  it('should display the string default value ', function () {
    expect(bptest.textIn(select('string', 'default', '> .contents')))
      .to.equal('"omega"')
  })

  it('should display the object default value ', function () {
    expect(bptest.textIn(select('complex', 'default', '> .contents')))
      .to.equal('{ "a": 1, "b": 2, "c": 3}')
  })

  it('should display the integer default value ', function () {
    expect(bptest.textIn(select('integer', 'default', '> .contents')))
      .to.equal('2')
  })
})
