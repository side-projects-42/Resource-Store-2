(function ($) {
  "use strict";

  var ksInScript = {
    id: "ks-inscript",
    name: "InScript",
    description:
      "InScript keyboard for Kashmiri language using Devanagari script",
    date: "2013-02-09",
    author: "Parag Nemade",
    license: "GPLv3",
    version: "1.0",
    contextLength: 1,
    maxKeyLength: 3,
    patterns: [
      ["्d", "्\u200c"],
      ["ग_", "ॻ"],
      ["ज_", "ॼ"],
      ["ड_", "ॾ"],
      ["ब_", "ॿ"],
      ["\\!", "ऍ"],
      ["1", "१"],
      ["\\@", "ॅ"],
      ["2", "२"],
      ["\\#", "#"],
      ["3", "३"],
      ["\\$", "$"],
      ["4", "४"],
      ["5", "५"],
      ["6", "६"],
      ["7", "७"],
      ["8", "८"],
      ["\\(", "("],
      ["9", "९"],
      ["\\)", ")"],
      ["0", "०"],
      ["\\_", "ः"],
      ["\\-", "-"],
      ["\\+", "ऋ"],
      ["\\=", "ृ"],
      ["Q", "औ"],
      ["q", "ौ"],
      ["W", "ऐ"],
      ["w", "ै"],
      ["E", "आ"],
      ["e", "ा"],
      ["R", "ई"],
      ["r", "ी"],
      ["T", "ऊ"],
      ["t", "ू"],
      ["Y", "भ"],
      ["y", "ब"],
      ["U", "ङ"],
      ["u", "ह"],
      ["I", "घ"],
      ["i", "ग"],
      ["O", "ध"],
      ["o", "द"],
      ["P", "झ"],
      ["p", "ज"],
      ["\\{", "ढ"],
      ["\\[", "ड"],
      ["\\}", "ञ"],
      ["\\]", "़"],
      ["A", "ओ"],
      ["a", "ो"],
      ["S", "ए"],
      ["s", "े"],
      ["D", "अ"],
      ["d", "्"],
      ["F", "इ"],
      ["f", "ि"],
      ["H", "फ"],
      ["h", "प"],
      ["J", "ऱ"],
      ["j", "र"],
      ["K", "ख"],
      ["k", "क"],
      ["L", "थ"],
      ["l", "त"],
      [":", "छ"],
      [";", "च"],
      ['"', "ठ"],
      ["'", "ट"],
      ["\\|", "ऑ"],
      ["\\\\", "ॉ"],
      ["\\~", "ऒ"],
      ["\\`", "ॊ"],
      ["Z", "ऎ"],
      ["z", "ॆ"],
      ["X", "ँ"],
      ["x", "ं"],
      ["C", "ण"],
      ["c", "म"],
      ["V", "ऩ"],
      ["v", "न"],
      ["B", "ऴ"],
      ["b", "व"],
      ["N", "ळ"],
      ["n", "ल"],
      ["M", "श"],
      ["m", "स"],
      ["\\<", "ष"],
      [",", ","],
      ["\\>", "।"],
      ["\\.", "."],
      ["\\?", "य़"],
      ["/", "य"],
      ["\\%", "ज्ञ"],
      ["\\^", "त्र"],
      ["\\&", "क्ष"],
      ["\\*", "श्र"],
    ],
    patterns_x: [
      ["4", "₹"],
      ["Q", "ॵ"],
      ["q", "ॏ"],
      ["T", "ॷ"],
      ["t", "ॗ"],
      ["A", "ॴ"],
      ["a", "ऻ"],
      ["G", "ॶ"],
      ["g", "ॖ"],
      ["Z", "ॳ"],
      ["z", "ऺ"],
    ],
  };

  $.ime.register(ksInScript);
})(jQuery);
