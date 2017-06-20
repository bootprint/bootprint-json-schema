
# API-Documentation

This page describes the API of this Bootprint-module

* [Templates](#templates)
  * [Partials](#partials)
* [Handlebars Helpers](#helpers)
* [LessCSS](#lesscss)
    
# Templates

    
<a name="template-indexhtml"></a>
### index.html

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/templates/index.html.hbs">bootprint-base @ 1.0.0 / handlebars/templates/index.html.hbs</a>        </td>
    </tr>
        <tr>
            <th>Structure</th>
            <td>
<pre><code>
<a href="#template-indexhtml">index.html</a>
│ <i>Default template for rendering the HTML-page.
│     ...</i>
├─┬ <a href="#partial-basehtml-head">base/html-head</a>
│ │ <i>This partial is rendered into the `<head>`-tag of ...</i>
│ ├── <a href="#partial-basetitle">base/title</a>
│ │   <i>This partial is rendered into the HTML-title in th...</i>
│ └── <a href="#partial-basehtml-head-extra">base/html-head-extra</a>
│     <i>This partial is added inside the <head>-tag, after...</i>
├── <a href="#partial-baseheader">base/header</a>
│   <i>This partial is displayed at the top of the HTML-b...</i>
├─┬ <a href="#partial-basebody">base/body</a>
│ │ <i>Renders the main-schema as panel and the sub-schem...</i>
│ ├─┬ <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>
│ │ │ <i>Renders a json.schema inside a bootstrap-panel.
│ │ │   ...</i>
│ │ ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│ │ │ │ <i>When properties are renderered this partial render...</i>
│ │ │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │ │     <i>Renders a reference to a subschema</i>
│ │ ├── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │ │   <i>Renders a reference to a subschema</i>
│ │ └─┬ <a href="#partial-json-schemabody">json-schema/body</a>
│ │   │ <i>Renders a json-schema without the surrounding pane...</i>
│ │   ├─┬ <a href="#partial-json-schematype-object">json-schema/type-object</a>
│ │   │ │ <i>Renders the properties of an `object`</i>
│ │   │ ├─┬ <a href="#partial-json-schemaproperties">json-schema/properties</a>
│ │   │ │ │ <i>Renders json-schema object properties.</i>
│ │   │ │ ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│ │   │ │ │ │ <i>When properties are renderered this partial render...</i>
│ │   │ │ │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │   │ │ │     <i>Renders a reference to a subschema</i>
│ │   │ │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│ │   │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │   │ └─┬ <a href="#partial-json-schemaadditionalproperties">json-schema/additionalProperties</a>
│ │   │   │ <i>Show a subschema for additionaProperties of a `obj...</i>
│ │   │   ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│ │   │   │ │ <i>When properties are renderered this partial render...</i>
│ │   │   │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │   │   │     <i>Renders a reference to a subschema</i>
│ │   │   └── <a href="#partial-json-schemabody">json-schema/body</a>
│ │   │       <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │   ├─┬ <a href="#partial-json-schemaarray-items">json-schema/array-items</a>
│ │   │ │ <i>renders a json-schema "items"-definition of array-...</i>
│ │   │ ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│ │   │ │ │ <i>When properties are renderered this partial render...</i>
│ │   │ │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │   │ │     <i>Renders a reference to a subschema</i>
│ │   │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│ │   │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │   ├─┬ <a href="#partial-json-schemaallof">json-schema/allOf</a>
│ │   │ │ <i>renders a json-schema "allOf"-definition.</i>
│ │   │ ├── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │   │ │   <i>Renders a reference to a subschema</i>
│ │   │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│ │   │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │   └─┬ <a href="#partial-json-schemaanyof">json-schema/anyOf</a>
│ │     │ <i>renders a json-schema "anyOf"-definition.</i>
│ │     ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│ │     │ │ <i>When properties are renderered this partial render...</i>
│ │     │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│ │     │     <i>Renders a reference to a subschema</i>
│ │     └── <a href="#partial-json-schemabody">json-schema/body</a>
│ │         <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ └─┬ <a href="#partial-json-schemadefinitions">json-schema/definitions</a>
│   │ <i>Renders all subschemas</i>
│   └─┬ <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>
│     │ <i>Renders a json.schema inside a bootstrap-panel.
│     │   ...</i>
│     ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│     │ │ <i>When properties are renderered this partial render...</i>
│     │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│     │     <i>Renders a reference to a subschema</i>
│     ├── <a href="#partial-json-schemareference">json-schema/reference</a>
│     │   <i>Renders a reference to a subschema</i>
│     └─┬ <a href="#partial-json-schemabody">json-schema/body</a>
│       │ <i>Renders a json-schema without the surrounding pane...</i>
│       ├─┬ <a href="#partial-json-schematype-object">json-schema/type-object</a>
│       │ │ <i>Renders the properties of an `object`</i>
│       │ ├─┬ <a href="#partial-json-schemaproperties">json-schema/properties</a>
│       │ │ │ <i>Renders json-schema object properties.</i>
│       │ │ ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│       │ │ │ │ <i>When properties are renderered this partial render...</i>
│       │ │ │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│       │ │ │     <i>Renders a reference to a subschema</i>
│       │ │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│       │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│       │ └─┬ <a href="#partial-json-schemaadditionalproperties">json-schema/additionalProperties</a>
│       │   │ <i>Show a subschema for additionaProperties of a `obj...</i>
│       │   ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│       │   │ │ <i>When properties are renderered this partial render...</i>
│       │   │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│       │   │     <i>Renders a reference to a subschema</i>
│       │   └── <a href="#partial-json-schemabody">json-schema/body</a>
│       │       <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│       ├─┬ <a href="#partial-json-schemaarray-items">json-schema/array-items</a>
│       │ │ <i>renders a json-schema "items"-definition of array-...</i>
│       │ ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│       │ │ │ <i>When properties are renderered this partial render...</i>
│       │ │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│       │ │     <i>Renders a reference to a subschema</i>
│       │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│       │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│       ├─┬ <a href="#partial-json-schemaallof">json-schema/allOf</a>
│       │ │ <i>renders a json-schema "allOf"-definition.</i>
│       │ ├── <a href="#partial-json-schemareference">json-schema/reference</a>
│       │ │   <i>Renders a reference to a subschema</i>
│       │ └── <a href="#partial-json-schemabody">json-schema/body</a>
│       │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│       └─┬ <a href="#partial-json-schemaanyof">json-schema/anyOf</a>
│         │ <i>renders a json-schema "anyOf"-definition.</i>
│         ├─┬ <a href="#partial-json-schemadatatype">json-schema/datatype</a>
│         │ │ <i>When properties are renderered this partial render...</i>
│         │ └── <a href="#partial-json-schemareference">json-schema/reference</a>
│         │     <i>Renders a reference to a subschema</i>
│         └── <a href="#partial-json-schemabody">json-schema/body</a>
│             <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
├── <a href="#partial-basefooter">base/footer</a>
│   <i>This partial is displayed at the bottom of the HTM...</i>
└── <a href="#partial-basejavascript-libs">base/javascript-libs</a>
    <i>This partial is rendered below the `footer`-partia...</i>
</code></pre>    


</td>
        </tr>
</table>

```
Default template for rendering the HTML-page.
    It can be replaced by another template if needed. However, in the average case,
    it should be left unmodified since it calls partials that can be overridden instead.

    The template includes the result of the Less-compiler (`main.css`)
    and places the other partials (`base/header`, `base/body` and `base/footer`)
    above, within and below a `div.container`-element.

    @public
```

    

## Partials

<a name="partial-basebody"></a>
### base/body

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/base/body.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/base/body.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>, 
                    <a href="#partial-json-schemadefinitions">json-schema/definitions</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
Renders the main-schema as panel and the sub-schemas below.
   This partial can be overridden if json-schema is only part of
   what should be displayed.
   @public
```

<a name="partial-basefooter"></a>
### base/footer

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/footer.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/footer.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is displayed at the bottom of the HTML-body.
    It is empty and can be overridden to include custom content in
    the Bootprint-result.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-baseheader"></a>
### base/header

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/header.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/header.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is displayed at the top of the HTML-body.
    It is empty and can be overridden to include custom content in
    the Bootprint-result.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-basehtml-head-extra"></a>
### base/html-head-extra

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/html-head-extra.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/html-head-extra.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basehtml-head">base/html-head</a>
            </td>
        </tr>
</table>

```
This partial is added inside the <head>-tag, after the
    other declarations of the "base/html-head"-partial.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-basehtml-head"></a>
### base/html-head

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/html-head.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/html-head.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-basetitle">base/title</a>, 
                    <a href="#partial-basehtml-head-extra">base/html-head-extra</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is rendered into the `<head>`-tag of the page.
    Additional tags can be placed in the partial `base/html-head-extra.hbs`.

    This partial can also be overridden to replace its contents, but beware
    that changes to this file may happen without incrementing the major version.
    @access private
```

<a name="partial-basejavascript-libs"></a>
### base/javascript-libs

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/javascript-libs.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/javascript-libs.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is rendered below the `footer`-partial of the page. You can include
    a javascript-bundle here that can be created by using `customize-engine-uglify`
```

<a name="partial-basetitle"></a>
### base/title

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/title.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/title.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basehtml-head">base/html-head</a>
            </td>
        </tr>
</table>

```
This partial is rendered into the HTML-title in the `<head>`-tag of the page.
    It can be overridden in order to display a custom title.
```

<a name="partial-json-schemaadditionalproperties"></a>
### json-schema/additionalProperties

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/additionalProperties.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/additionalProperties.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schematype-object">json-schema/type-object</a>
            </td>
        </tr>
</table>

```
Show a subschema for additionaProperties of a `object` definition.
```

<a name="partial-json-schemaallof"></a>
### json-schema/allOf

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/allOf.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/allOf.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemareference">json-schema/reference</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
</table>

```
renders a json-schema "allOf"-definition.
```

<a name="partial-json-schemaanyof"></a>
### json-schema/anyOf

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/anyOf.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/anyOf.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
</table>

```
renders a json-schema "anyOf"-definition.
```

<a name="partial-json-schemaarray-items"></a>
### json-schema/array-items

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/array-items.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/array-items.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
</table>

```
renders a json-schema "items"-definition of array-types.
```

<a name="partial-json-schemabody"></a>
### json-schema/body

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/body.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/body.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schematype-object">json-schema/type-object</a>, 
                    <a href="#partial-json-schemaarray-items">json-schema/array-items</a>, 
                    <a href="#partial-json-schematype-object">json-schema/type-object</a>, 
                    <a href="#partial-json-schemaallof">json-schema/allOf</a>, 
                    <a href="#partial-json-schemaanyof">json-schema/anyOf</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaadditionalproperties">json-schema/additionalProperties</a>, 
                    <a href="#partial-json-schemaallof">json-schema/allOf</a>, 
                    <a href="#partial-json-schemaanyof">json-schema/anyOf</a>, 
                    <a href="#partial-json-schemaarray-items">json-schema/array-items</a>, 
                    <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>, 
                    <a href="#partial-json-schemaproperties">json-schema/properties</a>
            </td>
        </tr>
</table>

```
Renders a json-schema without the surrounding panel.
    @param {boolean} showType whether or not to show the plain datatype for primitives
```

<a name="partial-json-schemadatatype"></a>
### json-schema/datatype

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/datatype.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/datatype.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemareference">json-schema/reference</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaadditionalproperties">json-schema/additionalProperties</a>, 
                    <a href="#partial-json-schemaanyof">json-schema/anyOf</a>, 
                    <a href="#partial-json-schemaarray-items">json-schema/array-items</a>, 
                    <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>, 
                    <a href="#partial-json-schemaproperties">json-schema/properties</a>
            </td>
        </tr>
</table>

```
When properties are renderered this partial renders the datatype of a property,
    with a link to the type-definition (in case of a $ref).
    Depending on the input, it renders an augmented data-type (e.g. "string[]"),
    the 'format'-value (e.g. "date-time") and "enum"-values.

    @param {boolean} discriminator true, this property is a swagger-discriminator (in which case enums are rendered as links)
```

<a name="partial-json-schemadefinitions"></a>
### json-schema/definitions

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/definitions.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/definitions.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basebody">base/body</a>
            </td>
        </tr>
</table>

```
Renders all subschemas
```

<a name="partial-json-schemamain-panel"></a>
### json-schema/main-panel

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/main-panel.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/main-panel.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemareference">json-schema/reference</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basebody">base/body</a>, 
                    <a href="#partial-json-schemadefinitions">json-schema/definitions</a>
            </td>
        </tr>
</table>

```
Renders a json.schema inside a bootstrap-panel.
    @public
    @readonly
```

<a name="partial-json-schemaproperties"></a>
### json-schema/properties

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/properties.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/properties.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schematype-object">json-schema/type-object</a>
            </td>
        </tr>
</table>

```
Renders json-schema object properties.
```

<a name="partial-json-schemareference"></a>
### json-schema/reference

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/reference.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/reference.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaallof">json-schema/allOf</a>, 
                    <a href="#partial-json-schemadatatype">json-schema/datatype</a>, 
                    <a href="#partial-json-schemamain-panel">json-schema/main-panel</a>
            </td>
        </tr>
</table>

```
Renders a reference to a subschema
```

<a name="partial-json-schematype-object"></a>
### json-schema/type-object

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/partials/json-schema/type-object.hbs">bootprint-json-schema @ 1.1.0 / handlebars/partials/json-schema/type-object.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaproperties">json-schema/properties</a>, 
                    <a href="#partial-json-schemaadditionalproperties">json-schema/additionalProperties</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemabody">json-schema/body</a>, 
                    <a href="#partial-json-schemabody">json-schema/body</a>
            </td>
        </tr>
</table>

```
Renders the properties of an `object`
```

     

# Helpers 

(from [bootprint-base@1.0.0/handlebars/helpers.js](https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/helpers.js))

## Members

<dl>
<dt><a href="#toUpperCase">toUpperCase</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to uppercase</p>
</dd>
<dt><a href="#eachSorted">eachSorted</a> ⇒ <code>string</code></dt>
<dd><p>This block-helper can be used to iterate objects sorted by key. It behaves like the built-in
<code>{{#each ...}}</code>-helper except that it can only be used for objects and the output is in a
deterministic order (i.e. sorted).</p>
<p>Example template:</p>
<pre><code class="lang-handlebars">{{#eachSorted obj}}
   {{@index}} of {{@length}}: {{@key}}={{.}}
{{/eachSorted}}
</code></pre>
<p>With the data <code>{ b: &#39;another one&#39;, a: &#39;first&#39; }</code>, ignoring newlines and indents, this will output</p>
<pre><code class="lang-text">1 of 2: a=first
2 of 2: b=another one
</code></pre>
<p>The helper will set the following @-values according to the Handlebars documentation:
<code>@first</code>, <code>@index</code>, <code>@key</code>, <code>@last</code>, <code>@length</code></p>
</dd>
</dl>

<a name="toUpperCase"></a>

## toUpperCase ⇒ <code>string</code>
Converts a string to uppercase

**Kind**: global variable  
**Returns**: <code>string</code> - the uppercase string  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input string |

<a name="eachSorted"></a>

## eachSorted ⇒ <code>string</code>
This block-helper can be used to iterate objects sorted by key. It behaves like the built-in
`{{#each ...}}`-helper except that it can only be used for objects and the output is in a
deterministic order (i.e. sorted).

Example template:

```handlebars
{{#eachSorted obj}}
   {{@index}} of {{@length}}: {{@key}}={{.}}
{{/eachSorted}}
```

With the data `{ b: 'another one', a: 'first' }`, ignoring newlines and indents, this will output

```text
1 of 2: a=first
2 of 2: b=another one
```

The helper will set the following @-values according to the Handlebars documentation:
`@first`, `@index`, `@key`, `@last`, `@length`

**Kind**: global variable  
**Api**: public  



# Helpers 

(from [bootprint-json-schema@1.1.0/handlebars/helpers.js](https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/handlebars/helpers.js))

<a name="dataType"></a>

## dataType(value) ⇒ <code>String</code>
Returns a descriptive string for a datatype

**Kind**: global function  
**Returns**: <code>String</code> - a string like <code>string[]</code> or <code>object[][]</code>  

| Param |
| --- |
| value | 




# LessCSS 

## Main LessCSS-files

* [highlight.js@8.9.1/styles/default.css](https://github.com/isagalaev/highlight.js/blob/v8.9.1/styles/default.css)  
* [bootprint-base@1.0.0/less/main.less](https://github.com/bootprint/bootprint-base/blob/v1.0.0/less/main.less)  
* [bootprint-json-schema@1.1.0/less/theme.less](https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/less/theme.less)  
* [bootprint-json-schema@1.1.0/less/variables.less](https://github.com/bootprint/bootprint-json-schema/blob/v1.1.0/less/variables.less)  
    
## LessCSS include paths

* [bootstrap@3.3.7/less](https://github.com/twbs/bootstrap/blob/v3.3.7/less)


