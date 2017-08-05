/* eslint-disable camelcase */

const { range } = require('./utils')

const metadata = {
  name: 'draft-04',
  docLink: 'https://tools.ietf.org/html/draft-fge-json-schema-validation-00',
  sections: {
    keywords: {
      'multipleOf': '5.1.1',
      'maximum': '5.1.2',
      'exclusiveMaximum': '5.1.2',
      'minimum': '5.1.3',
      'exclusiveMinimum': '5.1.3',
      'maxLength': '5.2.1',
      'minLength': '5.2.2',
      'pattern': '5.2.3',
      'items': '5.3.1',
      'items_array': '5.3.1',
      'additionalItems': '5.3.1',
      'minItems': '5.3.2',
      'maxItems': '5.3.3',
      'uniqueItems': '5.3.4',
      'minProperties': '5.4.2',
      'maxProperties': '5.4.1',
      'required': '5.4.3',
      'properties': '5.4.4',
      'patternProperties': '5.4.4', // TODO: Check again
      'additionalProperties': '5.4.4',
      'dependencies': '5.4.5',
      'enum': '5.5.1',
      'type': '5.5.2',
      'allOf': '5.5.3',
      'anyOf': '5.5.4',
      'oneOf': '5.5.5',
      'not': '5.5.6',
      'default': '6.2',
      'format': '7'
    },
    formats: {
      'date-time': '7.3.1',
      'email': '7.3.2',
      'hostname': '7.3.3',
      'ipv4': '7.3.4',
      'ipv6': '7.3.5',
      'uri': '7.3.6'
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
