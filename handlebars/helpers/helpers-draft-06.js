/* eslint-disable camelcase */

const {range} = require('./utils')

const metadata = {
  name: 'draft-06',
  docLink: 'https://tools.ietf.org/html/draft-wright-json-schema-validation-01',
  sections: {
    keywords: {
      'multipleOf': '6.1',
      'maximum': '6.2',
      'exclusiveMaximum': '6.3',
      'minimum': '6.4',
      'exclusiveMinimum': '6.5',
      'maxLength': '6.6',
      'minLength': '6.7',
      'pattern': '6.8',
      'items': '6.9',
      'items_array': '6.9',
      'additionalItems': '6.10',
      'minItems': '6.11',
      'maxItems': '6.12',
      'uniqueItems': '6.13',
      'contains': '6.14',
      'minProperties': '6.15',
      'maxProperties': '6.16',
      'required': '6.17',
      'properties': '6.18',
      'patternProperties': '6.19',
      'additionalProperties': '6.20',
      'dependencies': '6.21',
      'propertyNames': '6.22',
      'enum': '6.23',
      'const': '6.24',
      'type': '6.25',
      'allOf': '6.26',
      'anyOf': '6.27',
      'oneOf': '6.28',
      'not': '6.29',
      'default': '7.3',
      'examples': '7.4',
      'format': '8'
    },
    formats: {
      'date-time': '8.3.1',
      'email': '8.3.2',
      'hostname': '8.3.3',
      'ipv4': '8.3.4',
      'ipv6': '8.3.5',
      'uri': '8.3.6',
      'uri-reference': '8.3.7',
      'uri-template': '8.3.8',
      'json-pointer': '8.3.9'
    }
  }
}

/**
 *
 * @param {object} schema a json-schema with numeric bound restrictions
 * @param {number=} schema.exclusiveMinimum an exclusive minimum boundary
 * @param {number=} schema.exclusiveMaximum an exclusive minimum boundary
 * @param {number=} schema.minimum an inclusive minimum boundary
 * @param {number=} schema.maximum an inclusive minimum boundary
 * @returns {*}
 */
function json_schema__number_range (schema) {
  // The actual minimum boundary is exclusive, if "minimum" either does not exist or is larger than "exclusiveMinimum"
  let minExclusive = schema.exclusiveMinimum != null && (schema.minimum == null || schema.exclusiveMinimum >= schema.minimum)

  // The actual maximum boundary is exclusive, if "maximum" either does not exist or is smaller than "exclusiveMaximum"
  let maxExclusive = schema.exclusiveMaximum != null && (schema.maximum == null || schema.exclusiveMaximum <= schema.maximum)

  return range(
    minExclusive ? schema.exclusiveMinimum : schema.minimum,
    minExclusive,
    maxExclusive ? schema.exclusiveMaximum : schema.maximum,
    maxExclusive,
    'x')
}

module.exports = {
  metadata,
  json_schema__number_range
}
