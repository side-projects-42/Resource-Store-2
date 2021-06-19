/**
 * messageformat.js
 *
 * ICU PluralFormat + SelectFormat for JavaScript
 *
 * @author Alex Sexton - @SlexAxton
 * @version 0.1.7
 * @license WTFPL
 * @contributor_license Dojo CLA
 */
(function (root) {
  // Create the contructor function
  function MessageFormat(locale, pluralFunc) {
    this.locale = locale || "en";
    if (pluralFunc) {
      MessageFormat.locale[this.locale] = pluralFunc;
    } else {
      while (this.locale && !MessageFormat.locale.hasOwnProperty(this.locale)) {
        this.locale = this.locale.replace(/[-_]?[^-_]*$/, "");
      }
      if (!this.locale) {
        if (typeof module !== "undefined" && module.exports) {
          // in NodeJS, try to load locale from file
          this.locale = locale.replace(/[-_].*$/, "");
          var localeFile = require.resolve(
            path.join(__dirname, "locale", this.locale + ".js")
          );
          try {
            var localeCode = fs.readFileSync(localeFile);
            var script = vm.createScript(localeCode);
            script.runInNewContext({ MessageFormat: MessageFormat });
          } catch (ex) {
            ex.message =
              "Locale " + locale + " could not be loaded: " + ex.message;
            throw ex;
          }
        } else {
          throw new Error("Plural function not found for locale: " + locale);
        }
      }
    }
  }

  // methods in common with the generated MessageFormat
  // check d
  c = function (d) {
    if (!d) {
      throw new Error("MessageFormat: No data passed to function.");
    }
  };
  // require number
  n = function (d, k, o) {
    if (isNaN(d[k])) {
      throw new Error("MessageFormat: `" + k + "` isnt a number.");
    }
    return d[k] - (o || 0);
  };
  // value
  v = function (d, k) {
    c(d);
    return d[k];
  };
  // plural
  p = function (d, k, o, l, p) {
    c(d);
    return d[k] in p
      ? p[d[k]]
      : ((k = MessageFormat.locale[l](d[k] - o)), k in p ? p[k] : p.other);
  };
  // select
  s = function (d, k, p) {
    c(d);
    return d[k] in p ? p[d[k]] : p.other;
  };

  // Set up the locales object. Add in english by default
  MessageFormat.locale = {
    en: function (n) {
      if (n === 1) {
        return "one";
      }
      return "other";
    },
  };

  var mparser = require("./message_parser");

  MessageFormat.prototype.parse = function () {
    // Bind to itself so error handling works
    return mparser.parse.apply(mparser, arguments);
  };

  MessageFormat.prototype.precompile = function (ast) {
    var self = this,
      needOther = false;

    function _next(data) {
      var res = JSON.parse(JSON.stringify(data));
      res.pf_count++;
      return res;
    }
    function interpMFP(ast, data) {
      // Set some default data
      data = data || { keys: {}, offset: {} };
      var r = [],
        i,
        tmp;

      switch (ast.type) {
        case "program":
          return interpMFP(ast.program);
        case "messageFormatPattern":
          for (i = 0; i < ast.statements.length; ++i) {
            r.push(interpMFP(ast.statements[i], data));
          }
          tmp = r.join("+") || '""';
          return data.pf_count ? tmp : "function(d){return " + tmp + "}";
        case "messageFormatPatternRight":
          for (i = 0; i < ast.statements.length; ++i) {
            r.push(interpMFP(ast.statements[i], data));
          }
          return r.join("+");
        case "messageFormatElement":
          data.pf_count = data.pf_count || 0;
          if (ast.output) {
            return 'v(d,"' + ast.argumentIndex + '")';
          } else {
            data.keys[data.pf_count] = '"' + ast.argumentIndex + '"';
            return interpMFP(ast.elementFormat, data);
          }
          return "";
        case "elementFormat":
          if (ast.key === "select") {
            return (
              "s(d," +
              data.keys[data.pf_count] +
              "," +
              interpMFP(ast.val, data) +
              ")"
            );
          } else if (ast.key === "plural") {
            data.offset[data.pf_count || 0] = ast.val.offset || 0;
            return (
              "p(d," +
              data.keys[data.pf_count] +
              "," +
              (data.offset[data.pf_count] || 0) +
              ',"' +
              self.locale +
              '",' +
              interpMFP(ast.val, data) +
              ")"
            );
          }
          return "";
        /* // Unreachable cases.
        case 'pluralStyle':
        case 'selectStyle':*/
        case "pluralFormatPattern":
          data.pf_count = data.pf_count || 0;
          needOther = true;
          // We're going to simultaneously check to make sure we hit the required 'other' option.

          for (i = 0; i < ast.pluralForms.length; ++i) {
            if (ast.pluralForms[i].key === "other") {
              needOther = false;
            }
            r.push(
              '"' +
                ast.pluralForms[i].key +
                '":' +
                interpMFP(ast.pluralForms[i].val, _next(data))
            );
          }
          if (needOther) {
            throw new Error(
              "No 'other' form found in pluralFormatPattern " + data.pf_count
            );
          }
          return "{" + r.join(",") + "}";
        case "selectFormatPattern":
          data.pf_count = data.pf_count || 0;
          data.offset[data.pf_count] = 0;
          needOther = true;

          for (i = 0; i < ast.pluralForms.length; ++i) {
            if (ast.pluralForms[i].key === "other") {
              needOther = false;
            }
            r.push(
              '"' +
                ast.pluralForms[i].key +
                '":' +
                interpMFP(ast.pluralForms[i].val, _next(data))
            );
          }
          if (needOther) {
            throw new Error(
              "No 'other' form found in selectFormatPattern " + data.pf_count
            );
          }
          return "{" + r.join(",") + "}";
        /* // Unreachable
        case 'pluralForms':
        */
        case "string":
          tmp =
            '"' +
            (ast.val || "").replace(/\n/g, "\\n").replace(/"/g, '\\"') +
            '"';
          if (data.pf_count) {
            var o = data.offset[data.pf_count - 1];
            tmp = tmp.replace(
              /(^|[^\\])#/g,
              '$1"+n(d,' +
                data.keys[data.pf_count - 1] +
                (o ? "," + o : "") +
                ')+"'
            );
            tmp = tmp.replace(/^""\+/, "").replace(/\+""$/, "");
          }
          return tmp;
        default:
          throw new Error("Bad AST type: " + ast.type);
      }
    }
    return interpMFP(ast);
  };

  MessageFormat.prototype.compile = function (message) {
    return new Function(
      "MessageFormat",
      "return " + this.precompile(this.parse(message))
    )(MessageFormat);
  };

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = MessageFormat;
    }
    exports.MessageFormat = MessageFormat;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return MessageFormat;
    });
  } else {
    root["MessageFormat"] = MessageFormat;
  }
})(this);
