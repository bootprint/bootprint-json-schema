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

const tester = require('bootprint-unit-testing')

const {select} = require('../../utils')

describe('draft-04: The fstab-fixture', function () {
  this.timeout(10000)
  var bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should have a pattern-block in the fstab-section', function () {
    expect(bptest.textIn(select('diskUUID', 'properties', '> .contents [data-keywords="pattern"]')))
      .to.equal('String Pattern (5.2.3) x must match /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/')
  })
})
