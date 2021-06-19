Colors
======

When supplying colors to Chart options, you can use a number of formats. You can specify the color as a string in hexadecimal, RGB, or HSL notations. If a color is needed, but not specified, Chart.js will use the global default color. There are 3 color options, stored at `Chart.defaults`, to set:

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>rgba(0, 0, 0, 0.1)</code></td><td>Background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td><code>Color</code></td><td><code>rgba(0, 0, 0, 0.1)</code></td><td>Border color.</td></tr><tr class="odd"><td><code>color</code></td><td><code>Color</code></td><td><code>#666</code></td><td>Font color.</td></tr></tbody></table>

You can also pass a [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) object. You will need to create this before passing to the chart, but using it you can achieve some interesting effects.

Patterns and Gradients
----------------------

An alternative option is to pass a [CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) or [CanvasGradient](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient) object instead of a string colour.

For example, if you wanted to fill a dataset with a pattern from an image you could do the following.

    var img = new Image();
    img.src = "https://example.com/my_image.png";
    img.onload = function () {
      var ctx = document.getElementById("canvas").getContext("2d");
      var fillPattern = ctx.createPattern(img, "repeat");

      var chart = new Chart(ctx, {
        data: {
          labels: ["Item 1", "Item 2", "Item 3"],
          datasets: [
            {
              data: [10, 20, 30],
              backgroundColor: fillPattern,
            },
          ],
        },
      });
    };

Using pattern fills for data graphics can help viewers with vision deficiencies (e.g. color-blindness or partial sight) to [more easily understand your data](http://betweentwobrackets.com/data-graphics-and-colour-vision/).

Using the [Patternomaly](https://github.com/ashiguruma/patternomaly) library you can generate patterns to fill datasets.

    var chartData = {
      datasets: [
        {
          data: [45, 25, 20, 10],
          backgroundColor: [
            pattern.draw("square", "#ff6384"),
            pattern.draw("circle", "#36a2eb"),
            pattern.draw("diamond", "#cc65fe"),
            pattern.draw("triangle", "#ffce56"),
          ],
        },
      ],
      labels: ["Red", "Blue", "Purple", "Yellow"],
    };
