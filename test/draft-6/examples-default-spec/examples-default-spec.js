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

describe('draft-06: examples and default-value', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink for default-values to the draft-06-schema', function () {
    expect(bptest.$(select('string', 'default', '.header a')).first().attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.3')
  })

  it('should display the doclink for examples to the draft-06-schema', function () {
    expect(bptest.$(select('string', 'default', '.header a')).last().attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.4')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('string', 'default', '> .header')))
      .to.equal('Default and Examples (7.3, 7.4)')
  })

  it('should display the string default value ', function () {
    expect(bptest.textIn(select('string', 'default', '> .contents .json-schema--value-item.primary .json-schema--value')))
      .to.equal('"omega"')
  })

  it('should display the string examples together with the default value', function () {
    expect(bptest.textIn(select('string', 'default', '> .contents .json-schema--value-item:not(.primary) .json-schema--value')))
      .to.match(/"alpha" *"beta" *"gamma" *"delta"/)
  })

  it('should display the object default value ', function () {
    expect(bptest.textIn(select('complex', 'default', '> .contents .json-schema--value-item.primary .json-schema--value')))
      .to.equal('{ "a": 1, "b": 2, "c": 3}')
  })

  it('should display the integer default value ', function () {
    expect(bptest.textIn(select('integer', 'default', '> .contents .json-schema--value-item.primary .json-schema--value')))
      .to.equal('2')
  })
})
