exports.YUI2 = {
  "2.2.2": {
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-slider": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-dragdrop"],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: ["yui2-skin-sam-treeview", "yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 6,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.2.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
  },
  "2.3.1": {
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-slider": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-dragdrop"],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: ["yui2-skin-sam-treeview", "yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 6,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuiloader": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yuiloader/yui2-yuiloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.3.1/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.4.1": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-get/yui2-get-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-slider": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-dragdrop"],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: ["yui2-skin-sam-treeview", "yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yahoo-dom-event/yui2-yahoo-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 6,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuiloader": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yuiloader/yui2-yuiloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.4.1/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.5.2": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-dragdrop"],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: ["yui2-skin-sam-treeview", "yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.5.2/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.6.0": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-carousel": {
      name: "yui2-skin-sam-carousel",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-carousel/yui2-skin-sam-carousel-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-paginator": {
      name: "yui2-skin-sam-paginator",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-paginator/yui2-skin-sam-paginator-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-slider": {
      name: "yui2-skin-sam-slider",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-slider/yui2-skin-sam-slider-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
        "yui2-datasource",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-carousel": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-carousel",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-carousel/yui2-carousel-min.js",
      ext: false,
      combine: false,
      name: "yui2-carousel",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: [
        "yui2-skin-sam-paginator",
        "yui2-paginator",
        "yui2-dragdrop",
        "yui2-skin-sam-calendar",
        "yui2-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-paginator": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-paginator",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-paginator/yui2-paginator-min.js",
      ext: false,
      combine: false,
      name: "yui2-paginator",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-treeview",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.6.0/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.7.0": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-carousel": {
      name: "yui2-skin-sam-carousel",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-carousel/yui2-skin-sam-carousel-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-paginator": {
      name: "yui2-skin-sam-paginator",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-paginator/yui2-skin-sam-paginator-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-slider": {
      name: "yui2-skin-sam-slider",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-slider/yui2-skin-sam-slider-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
        "yui2-datasource",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-carousel": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-carousel",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-carousel/yui2-carousel-min.js",
      ext: false,
      combine: false,
      name: "yui2-carousel",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: [
        "yui2-skin-sam-paginator",
        "yui2-paginator",
        "yui2-dragdrop",
        "yui2-skin-sam-calendar",
        "yui2-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-paginator": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-paginator",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-paginator/yui2-paginator-min.js",
      ext: false,
      combine: false,
      name: "yui2-paginator",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-stylesheet": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-stylesheet/yui2-stylesheet-min.js",
      ext: false,
      combine: false,
      name: "yui2-stylesheet",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-treeview",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.7.0/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.8.0": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-carousel": {
      name: "yui2-skin-sam-carousel",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-carousel/yui2-skin-sam-carousel-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-paginator": {
      name: "yui2-skin-sam-paginator",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-paginator/yui2-skin-sam-paginator-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-progressbar": {
      name: "yui2-skin-sam-progressbar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-progressbar/yui2-skin-sam-progressbar-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-slider": {
      name: "yui2-skin-sam-slider",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-slider/yui2-skin-sam-slider-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
        "yui2-datasource",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-datemath": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-datemath/yui2-datemath-min.js",
      ext: false,
      combine: false,
      name: "yui2-datemath",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      supersedes: ["yui2-datemath"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-carousel": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-carousel",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-carousel/yui2-carousel-min.js",
      ext: false,
      combine: false,
      name: "yui2-carousel",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connectioncore": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-connectioncore/yui2-connectioncore-min.js",
      ext: false,
      combine: false,
      name: "yui2-connectioncore",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      supersedes: ["yui2-connectioncore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: [
        "yui2-skin-sam-paginator",
        "yui2-paginator",
        "yui2-dragdrop",
        "yui2-skin-sam-calendar",
        "yui2-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      optional: ["yui2-event-mouseenter", "yui2-event-delegate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-element-delegate": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-element-delegate/yui2-element-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-element-delegate",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-event-delegate": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-dom", "yui2-selector"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-event-delegate/yui2-event-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-delegate",
      type: "js",
    },
    "yui2-event-mouseenter": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-event-mouseenter/yui2-event-mouseenter-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-mouseenter",
      type: "js",
    },
    "yui2-event-simulate": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-event-simulate/yui2-event-simulate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-simulate",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-paginator": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-paginator",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-paginator/yui2-paginator-min.js",
      ext: false,
      combine: false,
      name: "yui2-paginator",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-progressbar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-progressbar",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-progressbar/yui2-progressbar-min.js",
      ext: false,
      combine: false,
      name: "yui2-progressbar",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-storage": {
      requires: ["yui2-yahoo", "yui2-event", "yui2-cookie"],
      optional: ["yui2-dom", "yui2-element", "yui2-swf", "yui2-swfstore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-storage/yui2-storage-min.js",
      ext: false,
      combine: false,
      name: "yui2-storage",
      type: "js",
    },
    "yui2-stylesheet": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-stylesheet/yui2-stylesheet-min.js",
      ext: false,
      combine: false,
      name: "yui2-stylesheet",
      type: "js",
    },
    "yui2-swfdetect": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-swfdetect/yui2-swfdetect-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfdetect",
      type: "js",
    },
    "yui2-swf": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      supersedes: ["yui2-swfdetect"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-swf/yui2-swf-min.js",
      ext: false,
      combine: false,
      name: "yui2-swf",
      type: "js",
    },
    "yui2-swfstore": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-cookie",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-swfstore/yui2-swfstore-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfstore",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-treeview",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      optional: ["yui2-event-simulate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.8.0r4": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-carousel": {
      name: "yui2-skin-sam-carousel",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-carousel/yui2-skin-sam-carousel-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-paginator": {
      name: "yui2-skin-sam-paginator",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-paginator/yui2-skin-sam-paginator-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-progressbar": {
      name: "yui2-skin-sam-progressbar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-progressbar/yui2-skin-sam-progressbar-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-slider": {
      name: "yui2-skin-sam-slider",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-slider/yui2-skin-sam-slider-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
        "yui2-datasource",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-datemath": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-datemath/yui2-datemath-min.js",
      ext: false,
      combine: false,
      name: "yui2-datemath",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      supersedes: ["yui2-datemath"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-carousel": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-carousel",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-carousel/yui2-carousel-min.js",
      ext: false,
      combine: false,
      name: "yui2-carousel",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connectioncore": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-connectioncore/yui2-connectioncore-min.js",
      ext: false,
      combine: false,
      name: "yui2-connectioncore",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      supersedes: ["yui2-connectioncore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: [
        "yui2-skin-sam-paginator",
        "yui2-paginator",
        "yui2-dragdrop",
        "yui2-skin-sam-calendar",
        "yui2-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      optional: ["yui2-event-mouseenter", "yui2-event-delegate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-element-delegate": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-element-delegate/yui2-element-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-element-delegate",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-event-delegate": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-dom", "yui2-selector"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-event-delegate/yui2-event-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-delegate",
      type: "js",
    },
    "yui2-event-mouseenter": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-event-mouseenter/yui2-event-mouseenter-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-mouseenter",
      type: "js",
    },
    "yui2-event-simulate": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-event-simulate/yui2-event-simulate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-simulate",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-paginator": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-paginator",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-paginator/yui2-paginator-min.js",
      ext: false,
      combine: false,
      name: "yui2-paginator",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-progressbar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-progressbar",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-progressbar/yui2-progressbar-min.js",
      ext: false,
      combine: false,
      name: "yui2-progressbar",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-storage": {
      requires: ["yui2-yahoo", "yui2-event", "yui2-cookie"],
      optional: ["yui2-dom", "yui2-element", "yui2-swf", "yui2-swfstore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-storage/yui2-storage-min.js",
      ext: false,
      combine: false,
      name: "yui2-storage",
      type: "js",
    },
    "yui2-stylesheet": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-stylesheet/yui2-stylesheet-min.js",
      ext: false,
      combine: false,
      name: "yui2-stylesheet",
      type: "js",
    },
    "yui2-swfdetect": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-swfdetect/yui2-swfdetect-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfdetect",
      type: "js",
    },
    "yui2-swf": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      supersedes: ["yui2-swfdetect"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-swf/yui2-swf-min.js",
      ext: false,
      combine: false,
      name: "yui2-swf",
      type: "js",
    },
    "yui2-swfstore": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-cookie",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-swfstore/yui2-swfstore-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfstore",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-treeview",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      optional: ["yui2-event-simulate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.0r4/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
  "2.8.1": {
    "yui2-base": {
      name: "yui2-base",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-base/yui2-base-min.css",
      type: "css",
    },
    "yui2-fonts": {
      name: "yui2-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-fonts/yui2-fonts-min.css",
      type: "css",
    },
    "yui2-grids": {
      name: "yui2-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-grids/yui2-grids-min.css",
      type: "css",
    },
    "yui2-reset": {
      name: "yui2-reset",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-reset/yui2-reset-min.css",
      type: "css",
    },
    "yui2-reset-fonts": {
      name: "yui2-reset-fonts",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-reset-fonts/yui2-reset-fonts-min.css",
      type: "css",
    },
    "yui2-reset-fonts-grids": {
      name: "yui2-reset-fonts-grids",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-reset-fonts-grids/yui2-reset-fonts-grids-min.css",
      type: "css",
    },
    "yui2-skin-sam": {
      name: "yui2-skin-sam",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam/yui2-skin-sam-min.css",
      type: "css",
    },
    "yui2-skin-sam-autocomplete": {
      name: "yui2-skin-sam-autocomplete",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-autocomplete/yui2-skin-sam-autocomplete-min.css",
      type: "css",
    },
    "yui2-skin-sam-button": {
      name: "yui2-skin-sam-button",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-button/yui2-skin-sam-button-min.css",
      type: "css",
    },
    "yui2-skin-sam-calendar": {
      name: "yui2-skin-sam-calendar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-calendar/yui2-skin-sam-calendar-min.css",
      type: "css",
    },
    "yui2-skin-sam-carousel": {
      name: "yui2-skin-sam-carousel",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-carousel/yui2-skin-sam-carousel-min.css",
      type: "css",
    },
    "yui2-skin-sam-colorpicker": {
      name: "yui2-skin-sam-colorpicker",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-colorpicker/yui2-skin-sam-colorpicker-min.css",
      type: "css",
    },
    "yui2-skin-sam-container": {
      name: "yui2-skin-sam-container",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-container/yui2-skin-sam-container-min.css",
      type: "css",
    },
    "yui2-skin-sam-datatable": {
      name: "yui2-skin-sam-datatable",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-datatable/yui2-skin-sam-datatable-min.css",
      type: "css",
    },
    "yui2-skin-sam-editor": {
      name: "yui2-skin-sam-editor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-editor/yui2-skin-sam-editor-min.css",
      type: "css",
    },
    "yui2-skin-sam-imagecropper": {
      name: "yui2-skin-sam-imagecropper",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-imagecropper/yui2-skin-sam-imagecropper-min.css",
      type: "css",
    },
    "yui2-skin-sam-layout": {
      name: "yui2-skin-sam-layout",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-layout/yui2-skin-sam-layout-min.css",
      type: "css",
    },
    "yui2-skin-sam-logger": {
      name: "yui2-skin-sam-logger",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-logger/yui2-skin-sam-logger-min.css",
      type: "css",
    },
    "yui2-skin-sam-menu": {
      name: "yui2-skin-sam-menu",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-menu/yui2-skin-sam-menu-min.css",
      type: "css",
    },
    "yui2-skin-sam-paginator": {
      name: "yui2-skin-sam-paginator",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-paginator/yui2-skin-sam-paginator-min.css",
      type: "css",
    },
    "yui2-skin-sam-profilerviewer": {
      name: "yui2-skin-sam-profilerviewer",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-profilerviewer/yui2-skin-sam-profilerviewer-min.css",
      type: "css",
    },
    "yui2-skin-sam-progressbar": {
      name: "yui2-skin-sam-progressbar",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-progressbar/yui2-skin-sam-progressbar-min.css",
      type: "css",
    },
    "yui2-skin-sam-resize": {
      name: "yui2-skin-sam-resize",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-resize/yui2-skin-sam-resize-min.css",
      type: "css",
    },
    "yui2-skin-sam-simpleeditor": {
      name: "yui2-skin-sam-simpleeditor",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-simpleeditor/yui2-skin-sam-simpleeditor-min.css",
      type: "css",
    },
    "yui2-skin-sam-slider": {
      name: "yui2-skin-sam-slider",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-slider/yui2-skin-sam-slider-min.css",
      type: "css",
    },
    "yui2-skin-sam-tabview": {
      name: "yui2-skin-sam-tabview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-tabview/yui2-skin-sam-tabview-min.css",
      type: "css",
    },
    "yui2-skin-sam-treeview": {
      name: "yui2-skin-sam-treeview",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-treeview/yui2-skin-sam-treeview-min.css",
      type: "css",
    },
    "yui2-skin-sam-yuitest": {
      name: "yui2-skin-sam-yuitest",
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-skin-sam-yuitest/yui2-skin-sam-yuitest-min.css",
      type: "css",
    },
    "yui2-animation": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-animation",
      type: "js",
    },
    "yui2-autocomplete": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-autocomplete",
        "yui2-datasource",
      ],
      optional: ["yui2-animation", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-autocomplete/yui2-autocomplete-min.js",
      ext: false,
      combine: false,
      name: "yui2-autocomplete",
      type: "js",
    },
    "yui2-button": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-button",
        "yui2-element",
      ],
      optional: ["yui2-containercore", "yui2-skin-sam-menu", "yui2-menu"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-button/yui2-button-min.js",
      ext: false,
      combine: false,
      name: "yui2-button",
      type: "js",
    },
    "yui2-datemath": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-datemath/yui2-datemath-min.js",
      ext: false,
      combine: false,
      name: "yui2-datemath",
      type: "js",
    },
    "yui2-calendar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-calendar",
      ],
      supersedes: ["yui2-datemath"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-calendar/yui2-calendar-min.js",
      ext: false,
      combine: false,
      name: "yui2-calendar",
      type: "js",
    },
    "yui2-carousel": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-carousel",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-carousel/yui2-carousel-min.js",
      ext: false,
      combine: false,
      name: "yui2-carousel",
      type: "js",
    },
    "yui2-charts": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-json",
        "yui2-datasource",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-charts/yui2-charts-min.js",
      ext: false,
      combine: false,
      name: "yui2-charts",
      type: "js",
    },
    "yui2-colorpicker": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-slider",
        "yui2-element",
        "yui2-skin-sam-colorpicker",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-colorpicker/yui2-colorpicker-min.js",
      ext: false,
      combine: false,
      name: "yui2-colorpicker",
      type: "js",
    },
    "yui2-connectioncore": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-connectioncore/yui2-connectioncore-min.js",
      ext: false,
      combine: false,
      name: "yui2-connectioncore",
      type: "js",
    },
    "yui2-connection": {
      requires: ["yui2-yahoo", "yui2-event"],
      supersedes: ["yui2-connectioncore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-connection",
      type: "js",
    },
    "yui2-containercore": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-containercore/yui2-containercore-min.js",
      ext: false,
      combine: false,
      name: "yui2-containercore",
      type: "js",
    },
    "yui2-container": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-container",
      ],
      supersedes: ["yui2-containercore"],
      optional: ["yui2-animation", "yui2-dragdrop", "yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-container/yui2-container-min.js",
      ext: false,
      combine: false,
      name: "yui2-container",
      type: "js",
    },
    "yui2-cookie": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-cookie/yui2-cookie-min.js",
      ext: false,
      combine: false,
      name: "yui2-cookie",
      type: "js",
    },
    "yui2-datasource": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-datasource/yui2-datasource-min.js",
      ext: false,
      combine: false,
      name: "yui2-datasource",
      type: "js",
    },
    "yui2-datatable": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-datatable",
        "yui2-element",
        "yui2-datasource",
      ],
      optional: [
        "yui2-skin-sam-paginator",
        "yui2-paginator",
        "yui2-dragdrop",
        "yui2-skin-sam-calendar",
        "yui2-calendar",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-datatable/yui2-datatable-min.js",
      ext: false,
      combine: false,
      name: "yui2-datatable",
      type: "js",
    },
    "yui2-dom": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-dom",
      type: "js",
    },
    "yui2-dragdrop": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-dragdrop",
      type: "js",
    },
    "yui2-simpleeditor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-simpleeditor",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-containercore",
        "yui2-dragdrop",
        "yui2-skin-sam-button",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
        "yui2-animation",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-simpleeditor/yui2-simpleeditor-min.js",
      ext: false,
      combine: false,
      name: "yui2-simpleeditor",
      type: "js",
    },
    "yui2-editor": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-editor",
        "yui2-skin-sam-button",
        "yui2-element",
        "yui2-skin-sam-menu",
        "yui2-menu",
        "yui2-button",
      ],
      supersedes: ["yui2-simpleeditor"],
      optional: ["yui2-animation", "yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-editor/yui2-editor-min.js",
      ext: false,
      combine: false,
      name: "yui2-editor",
      type: "js",
    },
    "yui2-element": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      optional: ["yui2-event-mouseenter", "yui2-event-delegate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-element",
      type: "js",
    },
    "yui2-element-delegate": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-element-delegate/yui2-element-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-element-delegate",
      type: "js",
    },
    "yui2-event": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-event",
      type: "js",
    },
    "yui2-event-delegate": {
      requires: ["yui2-yahoo", "yui2-event"],
      optional: ["yui2-dom", "yui2-selector"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-event-delegate/yui2-event-delegate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-delegate",
      type: "js",
    },
    "yui2-event-mouseenter": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-event-mouseenter/yui2-event-mouseenter-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-mouseenter",
      type: "js",
    },
    "yui2-event-simulate": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-event-simulate/yui2-event-simulate-min.js",
      ext: false,
      combine: false,
      name: "yui2-event-simulate",
      type: "js",
    },
    "yui2-get": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-get",
      type: "js",
    },
    "yui2-history": {
      requires: ["yui2-yahoo", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-history/yui2-history-min.js",
      ext: false,
      combine: false,
      name: "yui2-history",
      type: "js",
    },
    "yui2-imagecropper": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
        "yui2-resize",
        "yui2-skin-sam-imagecropper",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-imagecropper/yui2-imagecropper-min.js",
      ext: false,
      combine: false,
      name: "yui2-imagecropper",
      type: "js",
    },
    "yui2-imageloader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-imageloader/yui2-imageloader-min.js",
      ext: false,
      combine: false,
      name: "yui2-imageloader",
      type: "js",
    },
    "yui2-json": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-json/yui2-json-min.js",
      ext: false,
      combine: false,
      name: "yui2-json",
      type: "js",
    },
    "yui2-layout": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-layout",
        "yui2-event",
        "yui2-element",
      ],
      optional: [
        "yui2-dragdrop",
        "yui2-skin-sam-resize",
        "yui2-animation",
        "yui2-selector",
        "yui2-resize",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-layout/yui2-layout-min.js",
      ext: false,
      combine: false,
      name: "yui2-layout",
      type: "js",
    },
    "yui2-logger": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
      ],
      optional: ["yui2-dragdrop"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-logger/yui2-logger-min.js",
      ext: false,
      combine: false,
      name: "yui2-logger",
      type: "js",
    },
    "yui2-menu": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-containercore",
        "yui2-skin-sam-menu",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-menu/yui2-menu-min.js",
      ext: false,
      combine: false,
      name: "yui2-menu",
      type: "js",
    },
    "yui2-paginator": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-paginator",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-paginator/yui2-paginator-min.js",
      ext: false,
      combine: false,
      name: "yui2-paginator",
      type: "js",
    },
    "yui2-profiler": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-profiler/yui2-profiler-min.js",
      ext: false,
      combine: false,
      name: "yui2-profiler",
      type: "js",
    },
    "yui2-profilerviewer": {
      requires: [
        "yui2-skin-sam-profilerviewer",
        "yui2-yuiloader",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-profiler",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-profilerviewer/yui2-profilerviewer-min.js",
      ext: false,
      combine: false,
      name: "yui2-profilerviewer",
      type: "js",
    },
    "yui2-progressbar": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-skin-sam-progressbar",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-progressbar/yui2-progressbar-min.js",
      ext: false,
      combine: false,
      name: "yui2-progressbar",
      type: "js",
    },
    "yui2-resize": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-element",
        "yui2-skin-sam-resize",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-resize/yui2-resize-min.js",
      ext: false,
      combine: false,
      name: "yui2-resize",
      type: "js",
    },
    "yui2-selector": {
      requires: ["yui2-yahoo", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-selector/yui2-selector-min.js",
      ext: false,
      combine: false,
      name: "yui2-selector",
      type: "js",
    },
    "yui2-slider": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-skin-sam-slider",
        "yui2-event",
        "yui2-dragdrop",
      ],
      optional: ["yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-slider/yui2-slider-min.js",
      ext: false,
      combine: false,
      name: "yui2-slider",
      type: "js",
    },
    "yui2-storage": {
      requires: ["yui2-yahoo", "yui2-event", "yui2-cookie"],
      optional: ["yui2-dom", "yui2-element", "yui2-swf", "yui2-swfstore"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-storage/yui2-storage-min.js",
      ext: false,
      combine: false,
      name: "yui2-storage",
      type: "js",
    },
    "yui2-stylesheet": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-stylesheet/yui2-stylesheet-min.js",
      ext: false,
      combine: false,
      name: "yui2-stylesheet",
      type: "js",
    },
    "yui2-swfdetect": {
      requires: ["yui2-yahoo"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-swfdetect/yui2-swfdetect-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfdetect",
      type: "js",
    },
    "yui2-swf": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      supersedes: ["yui2-swfdetect"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-swf/yui2-swf-min.js",
      ext: false,
      combine: false,
      name: "yui2-swf",
      type: "js",
    },
    "yui2-swfstore": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-element",
        "yui2-swf",
        "yui2-cookie",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-swfstore/yui2-swfstore-min.js",
      ext: false,
      combine: false,
      name: "yui2-swfstore",
      type: "js",
    },
    "yui2-tabview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-tabview",
        "yui2-element",
      ],
      optional: ["yui2-connection"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-tabview/yui2-tabview-min.js",
      ext: false,
      combine: false,
      name: "yui2-tabview",
      type: "js",
    },
    "yui2-treeview": {
      requires: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-treeview",
      ],
      optional: ["yui2-skin-sam-calendar", "yui2-calendar", "yui2-animation"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-treeview/yui2-treeview-min.js",
      ext: false,
      combine: false,
      name: "yui2-treeview",
      type: "js",
    },
    "yui2-uploader": {
      requires: ["yui2-yahoo", "yui2-dom", "yui2-event", "yui2-element"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-uploader/yui2-uploader-min.js",
      ext: false,
      combine: false,
      name: "yui2-uploader",
      type: "js",
    },
    "yui2-yahoo": {
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo",
      type: "js",
    },
    "yui2-yahoo-dom-event": {
      rollup: 3,
      supersedes: ["yui2-yahoo", "yui2-event", "yui2-dom"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yahoo-dom-event",
      type: "js",
    },
    "yui2-yuiloader": {
      supersedes: ["yui2-yahoo", "yui2-get"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader",
      type: "js",
    },
    "yui2-yuiloader-dom-event": {
      rollup: 5,
      supersedes: [
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yahoo-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuiloader-dom-event/yui2-yuiloader-dom-event-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuiloader-dom-event",
      type: "js",
    },
    "yui2-utilities": {
      rollup: 8,
      supersedes: [
        "yui2-yahoo",
        "yui2-event",
        "yui2-dragdrop",
        "yui2-animation",
        "yui2-dom",
        "yui2-connection",
        "yui2-element",
        "yui2-yahoo-dom-event",
        "yui2-get",
        "yui2-yuiloader",
        "yui2-yuiloader-dom-event",
      ],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-utilities/yui2-utilities-min.js",
      ext: false,
      combine: false,
      name: "yui2-utilities",
      type: "js",
    },
    "yui2-yuitest": {
      requires: [
        "yui2-skin-sam-yuitest",
        "yui2-yahoo",
        "yui2-dom",
        "yui2-event",
        "yui2-skin-sam-logger",
        "yui2-logger",
      ],
      optional: ["yui2-event-simulate"],
      fullpath:
        "/usr/local/lib/node/.npm/yui3-2in3/0.0.3/package/dist/2.8.1/build/yui2-yuitest/yui2-yuitest-min.js",
      ext: false,
      combine: false,
      name: "yui2-yuitest",
      type: "js",
    },
  },
};
