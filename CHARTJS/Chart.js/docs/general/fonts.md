Fonts
=====

There are special global settings that can change all of the fonts on the chart. These options are in `Chart.defaults.font`. The global font settings only apply when more specific options are not included in the config.

For example, in this chart the text will all be red except for the labels in the legend.

    Chart.defaults.font.size = 16;
    let chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });

<table style="width:97%;"><colgroup><col style="width: 4%" /><col style="width: 6%" /><col style="width: 20%" /><col style="width: 67%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>family</code></td><td><code>string</code></td><td><code>"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"</code></td><td>Default font family for all text, follows CSS font-family options.</td></tr><tr class="even"><td><code>size</code></td><td><code>number</code></td><td><code>12</code></td><td>Default font size (in px) for text. Does not apply to radialLinear scale point labels.</td></tr><tr class="odd"><td><code>style</code></td><td><code>string</code></td><td><code>'normal'</code></td><td>Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).</td></tr><tr class="even"><td><code>weight</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Default font weight (boldness). (see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">MDN</a>).</td></tr><tr class="odd"><td><code>lineHeight</code></td><td><code>number</code>|<code>string</code></td><td><code>1.2</code></td><td>Height of an individual line of text (see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">MDN</a>).</td></tr></tbody></table>

Missing Fonts
-------------

If a font is specified for a chart that does exist on the system, the browser will not apply the font when it is set. If you notice odd fonts appearing in your charts, check that the font you are applying exists on your system. See [issue 3318](https://github.com/chartjs/Chart.js/issues/3318) for more details.

Loading Fonts
-------------

If a font is not cached and needs to be loaded, charts that use the font will need to be updated once the font is loaded. This can be accomplished using the [Font Loading APIs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API). See [issue 8020](https://github.com/chartjs/Chart.js/issues/8020) for more details.
