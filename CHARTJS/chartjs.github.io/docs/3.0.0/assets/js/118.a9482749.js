(window.webpackJsonp = window.webpackJsonp || []).push([
  [118],
  {
    431: function (t, e, o) {
      "use strict";
      o.r(e);
      var s = o(27),
        a = Object(s.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                o(
                  "h3",
                  { attrs: { id: "common-options-to-all-cartesian-axes" } },
                  [
                    o(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#common-options-to-all-cartesian-axes",
                        },
                      },
                      [t._v("#")]
                    ),
                    t._v(" Common options to all cartesian axes"),
                  ]
                ),
                t._v(" "),
                o("p", [
                  t._v("Namespace: "),
                  o("code", [t._v("options.scales[scaleId]")]),
                ]),
                t._v(" "),
                o("table", [
                  o("thead", [
                    o("tr", [
                      o("th", [t._v("Name")]),
                      t._v(" "),
                      o("th", [t._v("Type")]),
                      t._v(" "),
                      o("th", [t._v("Default")]),
                      t._v(" "),
                      o("th", [t._v("Description")]),
                    ]),
                  ]),
                  t._v(" "),
                  o("tbody", [
                    o("tr", [
                      o("td", [o("code", [t._v("bounds")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("string")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("'ticks'")])]),
                      t._v(" "),
                      o(
                        "td",
                        [
                          t._v("Determines the scale bounds. "),
                          o(
                            "RouterLink",
                            { attrs: { to: "/axes/cartesian/#scale-bounds" } },
                            [t._v("more...")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    o("tr", [
                      o("td", [o("code", [t._v("position")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("string")])]),
                      t._v(" "),
                      o("td"),
                      t._v(" "),
                      o(
                        "td",
                        [
                          t._v("Position of the axis. "),
                          o(
                            "RouterLink",
                            { attrs: { to: "/axes/cartesian/#axis-position" } },
                            [t._v("more...")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    o("tr", [
                      o("td", [o("code", [t._v("axis")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("string")])]),
                      t._v(" "),
                      o("td"),
                      t._v(" "),
                      o("td", [
                        t._v(
                          "Which type of axis this is. Possible values are: "
                        ),
                        o("code", [t._v("'x'")]),
                        t._v(", "),
                        o("code", [t._v("'y'")]),
                        t._v(
                          ". If not set, this is inferred from the first character of the ID which should be "
                        ),
                        o("code", [t._v("'x'")]),
                        t._v(" or "),
                        o("code", [t._v("'y'")]),
                        t._v("."),
                      ]),
                    ]),
                    t._v(" "),
                    o("tr", [
                      o("td", [o("code", [t._v("offset")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("boolean")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("false")])]),
                      t._v(" "),
                      o("td", [
                        t._v(
                          "If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "
                        ),
                        o("code", [t._v("true")]),
                        t._v(" for a bar chart by default."),
                      ]),
                    ]),
                    t._v(" "),
                    o("tr", [
                      o("td", [o("code", [t._v("title")])]),
                      t._v(" "),
                      o("td", [o("code", [t._v("object")])]),
                      t._v(" "),
                      o("td"),
                      t._v(" "),
                      o(
                        "td",
                        [
                          t._v("Scale title configuration. "),
                          o(
                            "RouterLink",
                            {
                              attrs: {
                                to: "/axes/labelling.html#scale-title-configuration",
                              },
                            },
                            [t._v("more...")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = a.exports;
    },
  },
]);