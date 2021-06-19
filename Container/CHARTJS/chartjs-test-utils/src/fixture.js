import {readImageData, _acquireChart, _releaseChart} from './utils';

function readFile(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      return callback(request.responseText);
    }
  };

  request.open('GET', url, false);
  request.send(null);
}

function loadConfig(url, callback) {
  var regex = /\.(json|js)$/i;
  var matches = url.match(regex);
  var type = matches ? matches[1] : 'json';
  var cfg = null;

  readFile(url, function(content) {
    switch (type) {
    case 'js':
      cfg = new Function('"use strict"; var module = {};' + content + '; return module.exports || fixture;')();
      break;
    case 'json':
      cfg = JSON.parse(content);
      break;
    default:
    }

    callback(cfg);
  });
}

function specFromFixture(description, inputs) {
  var input = inputs.js || inputs.json;
  it(input, function(done) {
    loadConfig(input, function(json) {
      var descr = json.description || (json.description = description);

      var config = json.config;
      var options = config.options || (config.options = {});

      // plugins are disabled by default, except if the path contains 'plugin' or there are instance plugins
      if (input.indexOf('plugin') === -1 && config.plugins === undefined) {
        options.plugins = options.plugins || false;
      }

      var chart = _acquireChart(config, json.options);
      const _done = () => {
        if (!inputs.png) {
          fail(descr + '\r\nMissing PNG comparison file for ' + input);
          done();
        }

        readImageData(inputs.png, function(expected) {
          expect(chart).toEqualImageData(expected, json);
          _releaseChart(chart);
          done();
        });
      };
      const run = json.options && json.options.run;
      if (typeof run === 'function') {
        Promise.resolve(run(chart)).finally(_done);
      } else {
        _done();
      }
    });
  });
}

export function specsFromFixtures(path) {
  var regex = new RegExp('(^/base/test/fixtures/' + path + '.+)\\.(png|json|js)');
  var inputs = {};

  Object.keys(__karma__.files || {}).forEach(function(file) {
    var matches = file.match(regex);
    var name = matches && matches[1];
    var type = matches && matches[2];

    if (name && type) {
      inputs[name] = inputs[name] || {};
      inputs[name][type] = file;
    }
  });

  return function() {
    Object.keys(inputs).forEach(function(key) {
      specFromFixture(key, inputs[key]);
    });
  };
}
