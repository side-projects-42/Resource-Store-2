Delay
=====

This example demonstrates the impact of the [`delay` option](../guide/options.md#delay) when scrolling. The first chart uses the default options (no delay) while the second chart is delayed for one second.

Scroll down

⇣

No delay (default)
------------------

\`\`\`js chart-editor Utils.srand(0);

const options = /\* */ { plugins: { deferred: { // defaults }, }, }; /* \*/

module.exports = { config: { type: “bar”, options: options, data: Utils.generate(), }, }; \`\`\`

Delay (1 second)
----------------

\`\`\`js chart-editor Utils.srand(0);

const options = /\* */ { plugins: { deferred: { delay: 1000, }, }, }; /* \*/

module.exports = { config: { type: “bar”, options: options, data: Utils.generate(), }, }; \`\`\`

Reload the page to reset the sample
