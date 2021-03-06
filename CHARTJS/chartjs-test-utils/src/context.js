// Code from https://stackoverflow.com/questions/4406864/html-canvas-unit-testing
export default class Context {
  constructor() {
    this._calls = []; // names/args of recorded calls
    this._initMethods();

    this._fillStyle = null;
    this._font = null;
    this._lineCap = null;
    this._lineDashOffset = null;
    this._lineJoin = null;
    this._lineWidth = null;
    this._strokeStyle = null;
    this._textAlign = null;
    this._textBaseline = null;

    // Define properties here so that we can record each time they are set
    Object.defineProperties(this, {
      fillStyle: {
        get: function () {
          return this._fillStyle;
        },
        set: function (style) {
          this._fillStyle = style;
          this.record("setFillStyle", [style]);
        },
      },
      font: {
        get: function () {
          return this._font;
        },
        set: function (font) {
          this._font = font;
          this.record("setFont", [font]);
        },
      },
      lineCap: {
        get: function () {
          return this._lineCap;
        },
        set: function (cap) {
          this._lineCap = cap;
          this.record("setLineCap", [cap]);
        },
      },
      lineDashOffset: {
        get: function () {
          return this._lineDashOffset;
        },
        set: function (offset) {
          this._lineDashOffset = offset;
          this.record("setLineDashOffset", [offset]);
        },
      },
      lineJoin: {
        get: function () {
          return this._lineJoin;
        },
        set: function (join) {
          this._lineJoin = join;
          this.record("setLineJoin", [join]);
        },
      },
      lineWidth: {
        get: function () {
          return this._lineWidth;
        },
        set: function (width) {
          this._lineWidth = width;
          this.record("setLineWidth", [width]);
        },
      },
      strokeStyle: {
        get: function () {
          return this._strokeStyle;
        },
        set: function (style) {
          this._strokeStyle = style;
          this.record("setStrokeStyle", [style]);
        },
      },
      textAlign: {
        get: function () {
          return this._textAlign;
        },
        set: function (align) {
          this._textAlign = align;
          this.record("setTextAlign", [align]);
        },
      },
      textBaseline: {
        get: function () {
          return this._textBaseline;
        },
        set: function (baseline) {
          this._textBaseline = baseline;
          this.record("setTextBaseline", [baseline]);
        },
      },
    });
  }
  _initMethods() {
    // define methods to test here
    // no way to introspect so we have to do some extra work :(
    var me = this;
    var methods = {
      arc: function () {},
      arcTo: function () {},
      beginPath: function () {},
      bezierCurveTo: function () {},
      clearRect: function () {},
      clip: function () {},
      closePath: function () {},
      fill: function () {},
      fillRect: function () {},
      fillText: function () {},
      strokeText: function () {},
      lineTo: function () {},
      measureText: function (text) {
        // return the number of characters * fixed size
        // Uses fake numbers for the bounding box
        return text
          ? {
              actualBoundingBoxAscent: 4,
              actualBoundingBoxDescent: 8,
              actualBoundingBoxLeft: 15,
              actualBoundingBoxRight: 25,
              width: text.length * 10,
            }
          : {
              actualBoundingBoxAscent: 0,
              actualBoundingBoxDescent: 0,
              actualBoundingBoxLeft: 0,
              actualBoundingBoxRight: 0,
              width: 0,
            };
      },
      moveTo: function () {},
      quadraticCurveTo: function () {},
      rect: function () {},
      restore: function () {},
      rotate: function () {},
      save: function () {},
      setLineDash: function () {},
      stroke: function () {},
      strokeRect: function () {},
      setTransform: function () {},
      translate: function () {},
    };

    Object.keys(methods).forEach(function (name) {
      me[name] = function () {
        me.record(name, arguments);
        return methods[name].apply(me, arguments);
      };
    });
  }
  record(methodName, args) {
    this._calls.push({
      name: methodName,
      args: Array.prototype.slice.call(args),
    });
  }
  getCalls() {
    return this._calls;
  }
  resetCalls() {
    this._calls = [];
  }
}
