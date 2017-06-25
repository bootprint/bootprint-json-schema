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

describe('draft-06: formats', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the doclink to the draft-06-schema', function () {
    expect(bptest.$(select('format-date-time', 'format', '.header a')).attr('href'))
      .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-8')
  })

  it('should display the correct explanation text', function () {
    expect(bptest.textIn(select('format-date-time', 'format', '> .header')))
      .to.equal('Format (8)')
  })

  describe('The "date-time" format', function () {
    checkFormat('format-date-time', 'date-time', '8.3.1')
  })

  describe('The "email" format', function () {
    checkFormat('format-email', 'email', '8.3.2')
  })

  describe('The "hostname" format', function () {
    checkFormat('format-hostname', 'hostname', '8.3.3')
  })

  describe('The "ipv4" format', function () {
    checkFormat('format-ipv4', 'ipv4', '8.3.4')
  })

  describe('The "ipv6" format', function () {
    checkFormat('format-ipv6', 'ipv6', '8.3.5')
  })

  describe('The "uri" format', function () {
    checkFormat('format-uri', 'uri', '8.3.6')
  })

  describe('The "uri-template" format', function () {
    checkFormat('format-uri-template', 'uri-template', '8.3.8')
  })

  describe('The "uri-reference" format', function () {
    checkFormat('format-uri-reference ', 'uri-reference', '8.3.7')
  })

  describe('The "json-pointer" format', function () {
    checkFormat('format-json-pointer', 'json-pointer', '8.3.9')
  })

  describe('A custom format (i.e. a vendor extension)', function () {
    it('should be displayed without reference to a documentation-section', function () {
      expect(bptest.textIn(select('format-non-standard', 'format', '> .contents')))
        .to.equal('my-personal-custom-format (vendor extension)')
    })

    it('should not render a doclink to the draft-06-schema', function () {
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

    it('should display the doclink to the draft-06-schema', function () {
      expect(bptest.$(select(definitionId, 'format', '> .contents a')).attr('href'))
        .to.equal(`https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-${expectedSection}`)
    })
  }
})
