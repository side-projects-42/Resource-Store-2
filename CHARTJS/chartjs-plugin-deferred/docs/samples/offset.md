Offset
======

This example demonstrates the impact of the [`yOffset` option](../guide/options.md#delay) when scrolling vertically. The first chart uses the default options (no offset) while the second chart uses an offset in pixels and the last one a offset in percent.

Scroll down

⇣

No offset (default)
-------------------

\`\`\`js chart-editor Utils.srand(0);

const options = /\* */ { plugins: { deferred: { // defaults }, }, }; /* \*/

module.exports = { config: { type: “bar”, options: options, data: Utils.generate(), }, }; \`\`\`

Offset (256 pixels)
-------------------

\`\`\`js chart-editor Utils.srand(0);

const options = /\* */ { plugins: { deferred: { yOffset: 256, }, }, }; /* \*/

module.exports = { config: { type: “bar”, options: options, data: Utils.generate(), }, }; \`\`\`

Offset (50 percent)
-------------------

\`\`\`js chart-editor Utils.srand(0);

const options = /\* */ { plugins: { deferred: { yOffset: “50%”, }, }, }; /* \*/

module.exports = { config: { type: “bar”, options: options, data: Utils.generate(), }, }; \`\`\`

Reload the page to reset the sample
