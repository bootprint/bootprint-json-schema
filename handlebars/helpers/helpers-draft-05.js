/* eslint-disable camelcase */

const {range} = require('./utils')

const metadata = {
  name: 'draft-05',
  docLink: 'https://tools.ietf.org/html/draft-wright-json-schema-validation-00',
  sections: {
    keywords: {
      'multipleOf': '5.1',
      'maximum': '5.2',
      'exclusiveMaximum': '5.3',
      'minimum': '5.4',
      'exclusiveMinimum': '5.5',
      'maxLength': '5.6',
      'minLength': '5.7',
      'pattern': '5.8',
      'items': '5.9',
      'items_array': '5.9',
      'additionalItems': '5.9',
      'maxItems': '5.10',
      'minItems': '5.11',
      'uniqueItems': '5.12',
      'maxProperties': '5.13',
      'minProperties': '5.14',
      'required': '5.15',
      'properties': '5.16',
      'patternProperties': '5.17',
      'additionalProperties': '5.18',
      'dependencies': '5.19',
      'enum': '5.20',
      'type': '5.21',
      'allOf': '5.22',
      'anyOf': '5.23',
      'oneOf': '5.24',
      'not': '5.25',
      'default': '6.2',
      'format': '7'
    },
    formats: {
      'date-time': '7.3.1',
      'email': '7.3.2',
      'hostname': '7.3.3',
      'ipv4': '7.3.4',
      'ipv6': '7.3.5',
      'uri': '7.3.6',
      'uriref': '7.3.7'
    }
  }
}

function json_schema__number_range (schema) {
  return range(schema.minimum, schema.exclusiveMinimum, schema.maximum, schema.exclusiveMaximum, 'x')
}

module.exports = {
  metadata,
  json_schema__number_range
}
