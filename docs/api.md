
# API-Documentation

This page describes the API of this Bootprint-module

* [Templates](#templates)
  * [Partials](#partials)
* [Handlebars Helpers](#helpers)
  * from [bootprint-base@2.0.0-rc.2](#helpers-bootprint-base)
  * from [bootprint-json-schema@2.0.0-rc.3](#helpers-bootprint-json-schema)
* [LessCSS](#lesscss)
    
# Templates

    
<a name="template-indexhtml"></a>
### index.html

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/templates/index.html.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/templates/index.html.hbs</a>        </td>
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
├─┬ <a href="#partial-baseheader">base/header</a>
│ │ <i>Renders the part at the top of the page, which is ...</i>
│ └── <a href="#partial-json-schemanavbar">json-schema/navbar</a>
│     <i>Renders the navigation bar at the top of the page
│     ...</i>
├─┬ <a href="#partial-basebody">base/body</a>
│ │ <i>Renders the main-schema as panel and the sub-schem...</i>
│ ├─┬ <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │ <i>Renders a json-schema. This is the entry-point of ...</i>
│ │ ├── <a href="#partial-json-schemaref">json-schema/ref</a>
│ │ │   <i>Renders a single json-reference
│ │ │   @this {object} the...</i>
│ │ ├── <a href="#partial-json-schematype">json-schema/type</a>
│ │ │   <i>Render the "type" keyword of a json-schema
│ │ │   @this {...</i>
│ │ ├─┬ <a href="#partial-json-schemastring">json-schema/string</a>
│ │ │ │ <i>Render the string-specific keywords of a json-sche...</i>
│ │ │ └── <a href="#partial-json-schemautilregex">json-schema/util/regex</a>
│ │ │     <i>Renders a regular express (e.g. for `patternProper...</i>
│ │ ├── <a href="#partial-json-schemanumber">json-schema/number</a>
│ │ │   <i>Render the number-specific keywords of a json-sche...</i>
│ │ ├─┬ <a href="#partial-json-schemaobject">json-schema/object</a>
│ │ │ │ <i>Render the object-specific keyword of a json-schem...</i>
│ │ │ ├── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │ │   <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ │ └── <a href="#partial-json-schemautilregex">json-schema/util/regex</a>
│ │ │     <i>Renders a regular express (e.g. for `patternProper...</i>
│ │ ├─┬ <a href="#partial-json-schemaenum">json-schema/enum</a>
│ │ │ │ <i>Render the enum keyword of a json-schema
│ │ │ │ @this {ob...</i>
│ │ │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│ │ │     <i>Renders a single default, enum or const value
│ │ │     @thi...</i>
│ │ ├─┬ <a href="#partial-json-schemaconst">json-schema/const</a>
│ │ │ │ <i>Render the "const" keyword of a json-schema
│ │ │ │ @this ...</i>
│ │ │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│ │ │     <i>Renders a single default, enum or const value
│ │ │     @thi...</i>
│ │ ├─┬ <a href="#partial-json-schemaarray">json-schema/array</a>
│ │ │ │ <i>Renders the array-specific keywords of a json-sche...</i>
│ │ │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ ├─┬ <a href="#partial-json-schemaallof">json-schema/allOf</a>
│ │ │ │ <i>Render the allOf keyword of a json-schema
│ │ │ │ @this {o...</i>
│ │ │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ ├─┬ <a href="#partial-json-schemaoneof">json-schema/oneOf</a>
│ │ │ │ <i>Render the oneOf keyword of a json-schema
│ │ │ │ @this {o...</i>
│ │ │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ ├─┬ <a href="#partial-json-schemaanyof">json-schema/anyOf</a>
│ │ │ │ <i>Render the anyOf keyword of a json-schema
│ │ │ │ @this {o...</i>
│ │ │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ ├─┬ <a href="#partial-json-schemanot">json-schema/not</a>
│ │ │ │ <i>Render the not keyword of a json-schema
│ │ │ │ @this {obj...</i>
│ │ │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│ │ │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│ │ ├─┬ <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>
│ │ │ │ <i>Render the "examples" and "default" keywords of a ...</i>
│ │ │ ├─┬ <a href="#partial-json-schemadraft-04default">json-schema/draft-04/default</a>
│ │ │ │ │ <i>Render default values as in draft-04 (without "exa...</i>
│ │ │ │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│ │ │ │     <i>Renders a single default, enum or const value
│ │ │ │     @thi...</i>
│ │ │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│ │ │     <i>Renders a single default, enum or const value
│ │ │     @thi...</i>
│ │ └── <a href="#partial-json-schemaformat">json-schema/format</a>
│ │     <i>Render the "format" keyword of a json-schema
│ │     @this...</i>
│ └─┬ <a href="#partial-json-schemadefinitions">json-schema/definitions</a>
│   │ <i>Renders the defintiions-property of the main-schem...</i>
│   └─┬ <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │ <i>Renders a json-schema. This is the entry-point of ...</i>
│     ├── <a href="#partial-json-schemaref">json-schema/ref</a>
│     │   <i>Renders a single json-reference
│     │   @this {object} the...</i>
│     ├── <a href="#partial-json-schematype">json-schema/type</a>
│     │   <i>Render the "type" keyword of a json-schema
│     │   @this {...</i>
│     ├─┬ <a href="#partial-json-schemastring">json-schema/string</a>
│     │ │ <i>Render the string-specific keywords of a json-sche...</i>
│     │ └── <a href="#partial-json-schemautilregex">json-schema/util/regex</a>
│     │     <i>Renders a regular express (e.g. for `patternProper...</i>
│     ├── <a href="#partial-json-schemanumber">json-schema/number</a>
│     │   <i>Render the number-specific keywords of a json-sche...</i>
│     ├─┬ <a href="#partial-json-schemaobject">json-schema/object</a>
│     │ │ <i>Render the object-specific keyword of a json-schem...</i>
│     │ ├── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │ │   <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     │ └── <a href="#partial-json-schemautilregex">json-schema/util/regex</a>
│     │     <i>Renders a regular express (e.g. for `patternProper...</i>
│     ├─┬ <a href="#partial-json-schemaenum">json-schema/enum</a>
│     │ │ <i>Render the enum keyword of a json-schema
│     │ │ @this {ob...</i>
│     │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│     │     <i>Renders a single default, enum or const value
│     │     @thi...</i>
│     ├─┬ <a href="#partial-json-schemaconst">json-schema/const</a>
│     │ │ <i>Render the "const" keyword of a json-schema
│     │ │ @this ...</i>
│     │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│     │     <i>Renders a single default, enum or const value
│     │     @thi...</i>
│     ├─┬ <a href="#partial-json-schemaarray">json-schema/array</a>
│     │ │ <i>Renders the array-specific keywords of a json-sche...</i>
│     │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     ├─┬ <a href="#partial-json-schemaallof">json-schema/allOf</a>
│     │ │ <i>Render the allOf keyword of a json-schema
│     │ │ @this {o...</i>
│     │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     ├─┬ <a href="#partial-json-schemaoneof">json-schema/oneOf</a>
│     │ │ <i>Render the oneOf keyword of a json-schema
│     │ │ @this {o...</i>
│     │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     ├─┬ <a href="#partial-json-schemaanyof">json-schema/anyOf</a>
│     │ │ <i>Render the anyOf keyword of a json-schema
│     │ │ @this {o...</i>
│     │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     ├─┬ <a href="#partial-json-schemanot">json-schema/not</a>
│     │ │ <i>Render the not keyword of a json-schema
│     │ │ @this {obj...</i>
│     │ └── <a href="#partial-json-schemaschema">json-schema/schema</a>
│     │     <span title="cycle detected"><i>(&#x1F501; cycle detected)</i> </span>
│     ├─┬ <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>
│     │ │ <i>Render the "examples" and "default" keywords of a ...</i>
│     │ ├─┬ <a href="#partial-json-schemadraft-04default">json-schema/draft-04/default</a>
│     │ │ │ <i>Render default values as in draft-04 (without "exa...</i>
│     │ │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│     │ │     <i>Renders a single default, enum or const value
│     │ │     @thi...</i>
│     │ └── <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
│     │     <i>Renders a single default, enum or const value
│     │     @thi...</i>
│     └── <a href="#partial-json-schemaformat">json-schema/format</a>
│         <i>Render the "format" keyword of a json-schema
│         @this...</i>
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
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/base/body.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/base/body.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
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
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/partials/base/footer.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/partials/base/footer.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/base/header.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/base/header.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemanavbar">json-schema/navbar</a>
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
Renders the part at the top of the page, which is the navigation bar by default
This partial can be overridden in order to remove or change the navigation or
display additional data

@public
```

<a name="partial-basehtml-head-extra"></a>
### base/html-head-extra

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/partials/base/html-head-extra.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/partials/base/html-head-extra.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/partials/base/html-head.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/partials/base/html-head.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/partials/base/javascript-libs.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/partials/base/javascript-libs.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/partials/base/title.hbs">bootprint-base @ 2.0.0-rc.2 / handlebars/partials/base/title.hbs</a>        </td>
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

<a name="partial-json-schemaallof"></a>
### json-schema/allOf

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/allOf.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/allOf.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the allOf keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaanyof"></a>
### json-schema/anyOf

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/anyOf.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/anyOf.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the anyOf keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaarray"></a>
### json-schema/array

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/array.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/array.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Renders the array-specific keywords of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaconst"></a>
### json-schema/const

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/const.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/const.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the "const" keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemadefinitions"></a>
### json-schema/definitions

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/definitions.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/definitions.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
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
Renders the defintiions-property of the main-schema
@this {object} the json-schema
```

<a name="partial-json-schemadraft-04default"></a>
### json-schema/draft-04/default

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/draft-04/default.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/draft-04/default.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>
            </td>
        </tr>
</table>

```
Render default values as in draft-04 (without "examples")
```

<a name="partial-json-schemaenum"></a>
### json-schema/enum

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/enum.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/enum.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the enum keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaexamples-default"></a>
### json-schema/examples-default

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/examples-default.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/examples-default.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemadraft-04default">json-schema/draft-04/default</a>, 
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>, 
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the "examples" and "default" keywords of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaformat"></a>
### json-schema/format

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/format.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/format.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the "format" keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemanavbar"></a>
### json-schema/navbar

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/navbar.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/navbar.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-baseheader">base/header</a>
            </td>
        </tr>
</table>

```
Renders the navigation bar at the top of the page
@this {object} the json-schema
```

<a name="partial-json-schemanot"></a>
### json-schema/not

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/not.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/not.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the not keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemanumber"></a>
### json-schema/number

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/number.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/number.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the number-specific keywords of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaobject"></a>
### json-schema/object

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/object.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/object.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemautilregex">json-schema/util/regex</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>, 
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the object-specific keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaoneof"></a>
### json-schema/oneOf

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/oneOf.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/oneOf.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the oneOf keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemaref"></a>
### json-schema/ref

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/ref.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/ref.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Renders a single json-reference
@this {object} the object containing the $ref-property
```

<a name="partial-json-schemaschema"></a>
### json-schema/schema

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/schema.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/schema.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemaref">json-schema/ref</a>, 
                    <a href="#partial-json-schematype">json-schema/type</a>, 
                    <a href="#partial-json-schemastring">json-schema/string</a>, 
                    <a href="#partial-json-schemanumber">json-schema/number</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaenum">json-schema/enum</a>, 
                    <a href="#partial-json-schemaconst">json-schema/const</a>, 
                    <a href="#partial-json-schemaarray">json-schema/array</a>, 
                    <a href="#partial-json-schemaallof">json-schema/allOf</a>, 
                    <a href="#partial-json-schemaoneof">json-schema/oneOf</a>, 
                    <a href="#partial-json-schemaanyof">json-schema/anyOf</a>, 
                    <a href="#partial-json-schemanot">json-schema/not</a>, 
                    <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>, 
                    <a href="#partial-json-schemaformat">json-schema/format</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basebody">base/body</a>, 
                    <a href="#partial-json-schemaallof">json-schema/allOf</a>, 
                    <a href="#partial-json-schemaanyof">json-schema/anyOf</a>, 
                    <a href="#partial-json-schemaarray">json-schema/array</a>, 
                    <a href="#partial-json-schemaarray">json-schema/array</a>, 
                    <a href="#partial-json-schemaarray">json-schema/array</a>, 
                    <a href="#partial-json-schemaarray">json-schema/array</a>, 
                    <a href="#partial-json-schemadefinitions">json-schema/definitions</a>, 
                    <a href="#partial-json-schemanot">json-schema/not</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemaoneof">json-schema/oneOf</a>
            </td>
        </tr>
</table>

```
Renders a json-schema. This is the entry-point of the schema.
@this {object} the json-schema
```

<a name="partial-json-schemastring"></a>
### json-schema/string

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/string.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/string.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemautilregex">json-schema/util/regex</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the string-specific keywords of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schematype"></a>
### json-schema/type

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/type.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/type.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaschema">json-schema/schema</a>
            </td>
        </tr>
</table>

```
Render the "type" keyword of a json-schema
@this {object} the json-schema
```

<a name="partial-json-schemautilregex"></a>
### json-schema/util/regex

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/util/regex.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/util/regex.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaobject">json-schema/object</a>, 
                    <a href="#partial-json-schemastring">json-schema/string</a>
            </td>
        </tr>
</table>

```
Renders a regular express (e.g. for `patternProperties` and `pattern`)
```

<a name="partial-json-schemautilsection"></a>
### json-schema/util/section

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/util/section.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/util/section.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-partial-block">@partial-block</a>
            </td>
        </tr>
</table>

```
Helper partial to render a section for a keyword (items, type, properties etc).
The partial is used as block-partial and the @partial-block is the contents of the
section.

@param {string} sections a coma-separated list of section names (i.e. items, additionalItems)
@param {string} title a title for the restrictions
@public
```

<a name="partial-json-schemautilvalue"></a>
### json-schema/util/value

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/util/value.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/util/value.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-json-schemaconst">json-schema/const</a>, 
                    <a href="#partial-json-schemadraft-04default">json-schema/draft-04/default</a>, 
                    <a href="#partial-json-schemaenum">json-schema/enum</a>, 
                    <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>, 
                    <a href="#partial-json-schemaexamples-default">json-schema/examples-default</a>, 
                    <a href="#partial-json-schemautilvalues">json-schema/util/values</a>
            </td>
        </tr>
</table>

```
Renders a single default, enum or const value
@this {*} the value
```

<a name="partial-json-schemautilvalues"></a>
### json-schema/util/values

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/partials/json-schema/util/values.hbs">bootprint-json-schema @ 2.0.0-rc.3 / handlebars/partials/json-schema/util/values.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-json-schemautilvalue">json-schema/util/value</a>
            </td>
        </tr>
</table>

```
Render a list of example values
@this {*[]} the list of values
```

     


<a name="helpers-bootprint-base"></a>
# Helpers (bootprint-base)

(from [bootprint-base@2.0.0-rc.2/handlebars/helpers.js](https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/handlebars/helpers.js)
)

<a name="helpers"></a>

## helpers
Default Handlebars-helpers for `bootprint-base`

**Kind**: global variable  

* [helpers](#helpers)
    * [.toUpperCase(value)](#helpers.toUpperCase) ⇒ <code>string</code>
    * [.eachSorted()](#helpers.eachSorted) ⇒ <code>string</code>
    * [.equal(value1, value2)](#helpers.equal) ⇒ <code>boolean</code>
    * [.md(&#x60;value&#x60;)](#helpers.md) ⇒ <code>Handlebars.SafeString</code>
    * [.ifeq(&#x60;v1&#x60;, &#x60;v2&#x60;)](#helpers.ifeq)
    * [.json(value)](#helpers.json) ⇒ <code>string</code>
    * [.ifcontains(array, object, options)](#helpers.ifcontains) ⇒ <code>string</code>
    * [.htmlId(value)](#helpers.htmlId) ⇒ <code>string</code>

<a name="helpers.toUpperCase"></a>

### helpers.toUpperCase(value) ⇒ <code>string</code>
Converts a string to uppercase

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - the uppercase string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input string |

<a name="helpers.eachSorted"></a>

### helpers.eachSorted() ⇒ <code>string</code>
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

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  
<a name="helpers.equal"></a>

### helpers.equal(value1, value2) ⇒ <code>boolean</code>
Checks whether two values a equal as in `value1 == value2` (not `===`)

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param |
| --- |
| value1 | 
| value2 | 

<a name="helpers.md"></a>

### helpers.md(&#x60;value&#x60;) ⇒ <code>Handlebars.SafeString</code>
Render a markdown-formatted text as HTML.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>Handlebars.SafeString</code> - a Handlebars-SafeString containing the provieded
     markdown, rendered as HTML.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| `value` | <code>string</code> | the markdown-formatted text |
| `options.hash.stripParagraph` | <code>boolean</code> | the marked-md-renderer wraps generated HTML in a &lt;p>-tag by default.      If this options is set to true, the &lt;p>-tag is stripped. |

<a name="helpers.ifeq"></a>

### helpers.ifeq(&#x60;v1&#x60;, &#x60;v2&#x60;)
Block helper that compares to values. The body is executed if both value equal.
Example:

```hbs
{{#ifeq value 10}}
   Value is 10
{{else}}
   Value is not 10
{{/ifeq}}
```

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| `v1` | <code>object</code> | the first value |
| `v2` | <code>object</code> | the second value |

<a name="helpers.json"></a>

### helpers.json(value) ⇒ <code>string</code>
Converts a javascript-object into a stringified highlighted JSON-object

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>object</code> | the javascript object |

<a name="helpers.ifcontains"></a>

### helpers.ifcontains(array, object, options) ⇒ <code>string</code>
Executes the block, if an object is part of an array

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;object&gt;</code> | the array |
| object | <code>object</code> | the javascript object |
| options | <code>object</code> | the Handlebars options |

<a name="helpers.htmlId"></a>

### helpers.htmlId(value) ⇒ <code>string</code>
Replace all characters that may not be used in HTML id-attributes by '-'.
There is still the restriction that IDs may only start with letters, which
is not addressed by this helper.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - the value after replacement and escaping  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input value |





<a name="helpers-bootprint-json-schema"></a>
# Helpers (bootprint-json-schema)

(from [bootprint-json-schema@2.0.0-rc.3/handlebars/helpers/index.js](https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/handlebars/helpers/index.js)
)

<a name="helpers"></a>

## helpers
Default Handlebars-helpers for `bootprint-json-schema`

**Kind**: global variable  

* [helpers](#helpers)
    * [.json_schema__doclink(type, sectionName, options)](#helpers.json_schema__doclink) ⇒ <code>string</code> \| <code>Handlebars.SafeString</code>
    * [.json_schema__if_version(...targetVersions)](#helpers.json_schema__if_version)
    * [.json_schema__datatype(schema, types)](#helpers.json_schema__datatype) ⇒ <code>String</code>
    * [.json_schema__number_range(schema, options)](#helpers.json_schema__number_range) ⇒ <code>string</code>
    * [.json_schema__definition_id(name)](#helpers.json_schema__definition_id) ⇒ <code>string</code>
    * [.json_schema__count_range([min], [max], singular, plural)](#helpers.json_schema__count_range) ⇒ <code>string</code> \| <code>null</code>
    * [.json_schema__subschema_name(url)](#helpers.json_schema__subschema_name) ⇒ <code>\*</code>
    * [.json_schema__is_required(schema, propertyName)](#helpers.json_schema__is_required) ⇒ <code>boolean</code>
    * [.json_schema__could_be_numeric()](#helpers.json_schema__could_be_numeric) ⇒ <code>boolean</code>
    * [.json_schema__could_be_of_type(type)](#helpers.json_schema__could_be_of_type) ⇒ <code>boolean</code>
    * [.json_schema__split_coma(list)](#helpers.json_schema__split_coma) ⇒ <code>Array.&lt;string&gt;</code>
    * [.json_schema__is_array(value)](#helpers.json_schema__is_array) ⇒ <code>boolean</code>
    * [.json_schema__has_any(schema, ...keywords)](#helpers.json_schema__has_any) ⇒ <code>boolean</code>
    * [.json_schema__enumerate(items)](#helpers.json_schema__enumerate) ⇒ <code>string</code>

<a name="helpers.json_schema__doclink"></a>

### helpers.json_schema__doclink(type, sectionName, options) ⇒ <code>string</code> \| <code>Handlebars.SafeString</code>
Render a link to a json-schema docs section from the json-schema documentation.
If the section does not exist, it is assumed to be a vendor extension.
The mapping of names to section numbers can be found in the version-specific helper
files.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> \| <code>Handlebars.SafeString</code> - a SafeString containing a link to the documentation or
  'vender extension' if there is no section of the given name  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | the type of section (keywords, formats) |
| sectionName | <code>string</code> | the section name (e.g. items) |
| options | <code>object</code> | the Handlebars options |

<a name="helpers.json_schema__if_version"></a>

### helpers.json_schema__if_version(...targetVersions)
Executes the helper-block, if the version matches any of the
specified target versions

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| ...targetVersions | <code>string</code> | a list of schema-versions to match against (varargs) |

<a name="helpers.json_schema__datatype"></a>

### helpers.json_schema__datatype(schema, types) ⇒ <code>String</code>
Returns the datatype of a schema as short formal string like `array<string|integer>`

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>String</code> - a string like `array<string|integer>`  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | a json-schema |
| types | <code>string</code> \| <code>Array.&lt;string&gt;</code> | one or more types of potentially multiple types in the schema that should be used right now. |

<a name="helpers.json_schema__number_range"></a>

### helpers.json_schema__number_range(schema, options) ⇒ <code>string</code>
Return a string for the numeric range restriction of the given schema
(as determined by `minimum`, `maximum`, `exclusiveMinimum` and `exclusiveMaximum`
properties).

The implementation is dispatched to version-specific behavior because `draft-04`
and `draft-05` differ from `draft-06`

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - a string like `1 < x < 2` or `x ≤ 5`  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | the current (sub-)schema |
| options | <code>object</code> | the Handlebars options |

<a name="helpers.json_schema__definition_id"></a>

### helpers.json_schema__definition_id(name) ⇒ <code>string</code>
Compute the element-id for a definition panel

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - an id without invalid characters for HTML-ids  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the definition (the key within the definitions object) |

<a name="helpers.json_schema__count_range"></a>

### helpers.json_schema__count_range([min], [max], singular, plural) ⇒ <code>string</code> \| <code>null</code>
Returns a prose-description of a number of things (e.g. "at least one item", "2 to 5 items")

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> \| <code>null</code> - a prose-description or `null` if there is no range  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [min] | <code>number</code> | the lower bound |
| [max] | <code>number</code> | the upper bound |
| singular | <code>string</code> | the "thing" in it singular form |
| plural | <code>string</code> | the "thing" it its plural form |

<a name="helpers.json_schema__subschema_name"></a>

### helpers.json_schema__subschema_name(url) ⇒ <code>\*</code>
Extract then name of a subschema from a $ref property

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="helpers.json_schema__is_required"></a>

### helpers.json_schema__is_required(schema, propertyName) ⇒ <code>boolean</code>
Returns "true", if the given propertyName is among the required properties
of a schema

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>boolean</code> - true, if the given propertyName is required  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | the json-schema to check for required properties of |
| propertyName | <code>string</code> | the property the name of the property |

<a name="helpers.json_schema__could_be_numeric"></a>

### helpers.json_schema__could_be_numeric() ⇒ <code>boolean</code>
Return true, if the type is numeric (integer or number) or *could be numeric*

The type *could be* numeric, if it is an array that includes number or integer,
or if it is not specified.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>boolean</code> - true, if the type could be numeric  
**this**: <code>{undefined\|string\|string[]}</code>  
**Access**: public  
<a name="helpers.json_schema__could_be_of_type"></a>

### helpers.json_schema__could_be_of_type(type) ⇒ <code>boolean</code>
Return true, if the dataType of a schema could be a given type

This includes an undefined `type` property, an array `type`-property that includes
the checke values and a string `type'-property that equals the checked value.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>boolean</code> - true, if the type of the schema could be the parameter  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | the type to check the schema against |

<a name="helpers.json_schema__split_coma"></a>

### helpers.json_schema__split_coma(list) ⇒ <code>Array.&lt;string&gt;</code>
Splits a coma-separated list into an array.

This helper can be used as nested-helper for other helpers that expect arrays

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>Array.&lt;string&gt;</code> - the list items as array  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>string</code> | a coma-separated list of strings |

<a name="helpers.json_schema__is_array"></a>

### helpers.json_schema__is_array(value) ⇒ <code>boolean</code>
Returns true, if the value is an array

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>boolean</code> - true, if the value is an array  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value |

<a name="helpers.json_schema__has_any"></a>

### helpers.json_schema__has_any(schema, ...keywords) ⇒ <code>boolean</code>
Checks, if the given schema contains any of the provided keywords (like "type" or "items")

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>boolean</code> - true, if any of the keywords exists in the schema  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | a json-schema |
| ...keywords | <code>string</code> | a list of keywords to check again |

<a name="helpers.json_schema__enumerate"></a>

### helpers.json_schema__enumerate(items) ⇒ <code>string</code>
Convert an array into a prose-enumeration

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - a written enumeration (a,b and c)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | an array of strings (e.g. ['a','b','c']) |




# LessCSS 

## Main LessCSS-files

* [highlight.js@9.12.0/styles/default.css](https://github.com/isagalaev/highlight.js/blob/v9.12.0/styles/default.css)  
* [bootprint-base@2.0.0-rc.2/less/main.less](https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc.2/less/main.less)  
* [bootprint-json-schema@2.0.0-rc.3/less/theme.less](https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/less/theme.less)  
* [bootprint-json-schema@2.0.0-rc.3/less/variables.less](https://github.com/bootprint/bootprint-json-schema/blob/v2.0.0-rc.3/less/variables.less)  
    
## LessCSS include paths

* [bootstrap@3.3.7/less](https://github.com/twbs/bootstrap/blob/v3.3.7/less)


