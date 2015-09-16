
module.exports = {
    "json-schema--datatype": dataType,
    /**
     * Extract then name of a subschema from a $ref property
     * @param url
     * @returns {*}
     */
    "json-schema--subschema-name": function(url) {
        return url.replace("#/definitions/","");
    },

    "json-schema--parameter-name": function(url) {
        return url.replace('#/parameters/', '');
    },

    "json-schema--parameter-properties": parameterRef
};

/**
 * Returns a descriptive string for a datatype
 * @param value
 * @returns {String} a string like <code>string[]</code> or <code>object[][]</code>
 */
function dataType(value) {
    if (value['anyOf'] || value['allOf'] || value['oneOf']) {
        return "";
    }
    if (!value.type) {
        return "object";
    }
    if (value.type === "array") {
        if (!value.items) {
            return "array";
        }
        if (value.items.type) {
            return dataType(value.items) + "[]";
        } else {
            return "object[]";
        }
    }
    return value.type;
}

/* Returns a parameter value for a parameter key
 * @param parameters 
 * @param parameterName
 * @param parameterKey
 * @returns parameter value
 */
function parameterRef(parameters, parameterName, key) {
    var parametersObj = parameters.hash.parameters;
    var paramName = parameters.hash.parameterName.replace('#/parameters/','');
    var objectKey = parameters.hash.key;
    if (objectKey == 'enum')
        console.log(parametersObj[paramName]);
    return parametersObj[paramName][objectKey];
}