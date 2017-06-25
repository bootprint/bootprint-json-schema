# bootprint-json-schema 

[![NPM version](https://badge.fury.io/js/bootprint-json-schema.svg)](http://badge.fury.io/js/bootprint-json-schema)
[![Travis Build Status](https://travis-ci.org/bootprint/bootprint-json-schema.svg?branch=master)](https://travis-ci.org/bootprint/bootprint-json-schema)
[![Coverage Status](https://img.shields.io/codecov/bootprint/bootprint-json-schema.svg)](https://codecov.io/github/bootprint/bootprint-json-schema)
[![Greenkeeper badge](https://badges.greenkeeper.io/bootprint/bootprint-json-schema.svg)](https://greenkeeper.io/)

> Converts a json-schema into a static html page



# Installation

```
npm -g install bootprint
npm -g install bootprint-json-schema
```

## Usage


After installing the package globally, you can run bootprint with the command

```bash
bootprint bootprint-json-schema https://raw.githubusercontent.com/bootprint/bootprint-json-schema/v2.0.0-rc.1/examples/example.json target
```

`example.json` can be found in [examples/example.json](examples/example.json) in this project.
It is a copy of the [fstab-example](http://json-schema.org/example2.html) from the JSON-schema documentation, licensed under the AFL or BSD license.


Bootprint will then generate the following files:

<pre><code>examples/target/
├── index.html
├── main.css
└── main.css.map
</code></pre> 


## Customizing

You can write your own module that customizes the partials and helpers in this module
(see [the bootprint documentation](https://github.com/bootprint/bootprint/blob/master/doc/modules.md)) for details.

The entrypoint JavaScript-file of such a module would look like.

```js
module.exports = function (customize) {
  return customize
    .load(require('bootprint-json-schema'))
    .merge({
      // You customizations here
    })

// Add "package" metadata. This can be evaluated by documentation generators
module.exports.package = require('./package')
```

# API

see [docs/api.md](docs/api.md)


# License

`bootprint-json-schema` is published under the MIT-license.

See [LICENSE](LICENSE) for details.


# Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
# Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).