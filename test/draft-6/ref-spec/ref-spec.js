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

const tester = require('bootprint-unit-testing')

// ID of the target element
const targetId = 'definitions-string-const'

describe('draft-06: ref-spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  describe('a $ref-value', function () {
    it('should contain a link to the correct definition', function () {
      expect(bptest.$('#json-schema--main-schema .json-schema--reference').first().attr('href'))
        .to.equal(`#${targetId}`)
    })

    it('should contain the name of ref-target in the text', function () {
      expect(bptest.$('#json-schema--main-schema .json-schema--reference').first().text())
        .to.equal('#/definitions/string-const')
    })
  })

  describe('The link target', function () {
    it('should be the correct div', function () {
      expect(bptest.textIn(`#${targetId} [data-keywords="type"] > .contents`))
        .to.equal('string')
    })
  })
})
