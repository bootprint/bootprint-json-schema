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

describe('The fstab-fixture', function () {
  this.timeout(10000)
  var bptest = tester(require('../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should have a pattern-block in the fstab-section', function () {
    expect(bptest.$('#definition-diskUUID .json-property-pattern .json-schema--regex').text())
      .to.equal('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')
  })
})
