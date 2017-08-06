/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */

const expect = require('chai').expect
const tester = require('bootprint-unit-testing')

describe('draft-05: title-description', function () {
  this.timeout(10000)
  const bptest = tester(require('../../..'), __dirname, require('./schema.json'))

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should display the main title in the main panel title', function () {
    expect(bptest.textIn('#json-schema--main-schema .panel-heading')).to.equal('Title and descriptions')
  })

  it('should display the main description in the main panel contents', function () {
    expect(bptest.textIn('#json-schema--main-schema > .panel-body > * > .json-schema--meta-data')).to.equal('schema to test title and descriptions')
  })

  it('should display the description of a sub-schema', function () {
    expect(bptest.textIn('#json-schema--main-schema > .panel-body .json-schema--subschema[data-property-name="name"] .json-schema--meta-data .json-schema--description'))
      .to.equal('The name of this instance')
  })

  it('should display the title of a sub-schema', function () {
    expect(bptest.textIn('#json-schema--main-schema > .panel-body .json-schema--subschema[data-property-name="name"] .json-schema--meta-data .json-schema--title'))
      .to.equal('Name')
  })

  it('should display the title of a definition in the panel header', function () {
    expect(bptest.textIn('#definitions-credentials > .panel-heading .json-schema-definition-title'))
      .to.equal('User credentials')
  })

  it('should display the description of a definition in the panel body', function () {
    expect(bptest.textIn('#definitions-credentials > .panel-body .json-schema--description'))
      .to.equal('The credentials contain a user and a password and can be used to log in to the system')
  })
})
