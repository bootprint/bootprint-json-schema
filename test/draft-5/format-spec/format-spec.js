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

describe('draft-05: formats', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink to the draft-05-schema', function () {
    expect(bptest.$(select('format-date-time', 'format', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('format-date-time', 'format', '> .header')))
      .to.equal('Format (7)')
  })

  describe('The "date-time" format', function () {
    checkFormat('format-email', 'email', '7.3.2')
  })

  describe('The "email" format', function () {
    checkFormat('format-email', 'email', '7.3.2')
  })

  describe('The "hostname" format', function () {
    checkFormat('format-hostname', 'hostname', '7.3.3')
  })

  describe('The "ipv4" format', function () {
    checkFormat('format-ipv4', 'ipv4', '7.3.4')
  })

  describe('The "ipv6" format', function () {
    checkFormat('format-ipv6', 'ipv6', '7.3.5')
  })

  describe('The "uri" format', function () {
    checkFormat('format-uri', 'uri', '7.3.6')
  })

  describe('A custom format', function () {
    it('should be displayed without reference to a documentation-section', function () {
      expect(bptest.textIn(select('format-non-standard', 'format', '> .contents')))
        .to.equal('my-personal-custom-format (vendor extension)')
    })

    it('should not render a doclink to the draft-05-schema', function () {
      expect(bptest.$(select('format-non-standard', 'format', '> .contents a')).length)
        .to.equal(0)
    })
  })

  /**
   * Verify the rendered contents of a definition from the test-fixture
   * @param definitionId the key within the definitions object
   * @param expectedFormatName the expected (rendered) name of the format
   * @param expectedSection the expected name of the section in the specification
   */
  function checkFormat (definitionId, expectedFormatName, expectedSection) {
    it('should display the correct format name', function () {
      expect(bptest.textIn(select(definitionId, 'format', '> .contents')))
        .to.equal(`${expectedFormatName} (${expectedSection})`)
    })

    it('should display the doclink to the draft-05-schema', function () {
      expect(bptest.$(select(definitionId, 'format', '> .contents a')).attr('href'))
        .to.equal(`https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-${expectedSection}`)
    })
  }
})
