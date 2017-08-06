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

describe('draft-05: all-any-one-not-spec', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  describe('the all-of keyword', function () {
    it('should display the doclink to the draft-05-schema', function () {
      expect(bptest.$(select('allOf-test', 'allOf', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.22')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('allOf-test', 'allOf', '> .header')))
        .to.equal('Must match all of (5.22)')
    })

    it('should display all sub-schemas', function () {
      expect(bptest.textIn(select('allOf-test', 'allOf', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('integer integer integer')
    })
  })

  describe('the any-of keyword', function () {
    it('should display the doclink to the draft-05-schema', function () {
      expect(bptest.$(select('anyOf-test', 'anyOf', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.23')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('anyOf-test', 'anyOf', '> .header')))
        .to.equal('Must match any of (5.23)')
    })

    it('should display all sub-schemas', function () {
      expect(bptest.textIn(select('anyOf-test', 'anyOf', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('integer integer integer')
    })
  })

  describe('the not keyword', function () {
    it('should display the doclink to the draft-05-schema', function () {
      expect(bptest.$(select('not-test', 'not', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.25')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('not-test', 'not', '> .header')))
        .to.equal('Must not match (5.25)')
    })

    it('should display the sub-schema', function () {
      expect(bptest.textIn(select('not-test', 'not', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('integer')
    })
  })

  describe('the one-of keyword', function () {
    it('should display the doclink to the draft-05-schema', function () {
      expect(bptest.$(select('oneOf-test', 'oneOf', '.header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.24')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('oneOf-test', 'oneOf', '> .header')))
        .to.equal('Must match exactly one of (5.24)')
    })

    it('should display all sub-schemas', function () {
      expect(bptest.textIn(select('oneOf-test', 'oneOf', '> .contents [data-keywords*="type"] > .contents')))
        .to.equal('integer integer integer')
    })
  })
})
