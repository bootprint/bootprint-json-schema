/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */

const expect = require('chai').expect
const tester = require('bootprint-unit-testing')
const {select} = require('../../utils')

describe('draft-06: string-restrictions', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  describe('the string-length section', function () {
    it('should display a the doclink to the draft-06-schema for minLength', function () {
      expect(bptest.$(select('string-min-length', 'minLength', '> .header a:first-child')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.7')
    })

    it('should display a the doclink to the draft-06-schema for maxLength', function () {
      expect(bptest.$(select('string-min-length', 'minLength', '> .header a:last-child')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.6')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('string-min-length', 'minLength', '> .header')))
        .to.equal('String length (6.7, 6.6)')
    })

    it('should display a minimum length', function () {
      expect(bptest.textIn(select('string-min-length', 'minLength', '.contents')).trim())
        .to.equal('at least 2 characters')
    })

    it('should display a maximum length', function () {
      expect(bptest.textIn(select('string-max-length', 'maxLength', '.contents')).trim())
        .to.equal('at most 5 characters')
    })

    it('should display combined mininum-maximum length', function () {
      expect(bptest.textIn(select('string-min-max-length', 'minLength', '.contents')).trim())
        .to.equal('2 to 5 characters')
    })
  })

  describe('the pattern section', function () {
    it('should display a the doclink to the draft-06-schema for minLength', function () {
      expect(bptest.$(select('only-a', 'pattern', '> .header a')).attr('href'))
        .to.equal('https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.8')
    })

    it('should display the correct explanation text', function () {
      expect(bptest.textIn(select('only-a', 'pattern', '> .header')))
        .to.equal('String Pattern (6.8)')
    })

    it('should display a regex-pattern restriction', function () {
      expect(bptest.textIn(select('only-a', 'pattern', '.contents')).trim())
        .to.equal('x must match /a*/')
    })
  })
})
