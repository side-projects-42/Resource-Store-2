(function ($) {
  "use strict";

  var saInScript2 = {
    id: "sa-inscript2",
    name: "संस्कृत इनस्क्रिप्ट २",
    description: "Enhanced InScript keyboard for Sanskrit language",
    date: "2012-11-06",
    author: "Parag Nemade",
    license: "GPLv3",
    version: "1.0",
    patterns: [
      ["1", "१"],
      ["\\@", "ॅ"],
      ["2", "२"],
      ["\\#", "्र"],
      ["3", "३"],
      ["\\$", "र्"],
      ["4", "४"],
      ["5", "५"],
      ["6", "६"],
      ["7", "७"],
      ["8", "८"],
      ["\\(", "("],
      ["9", "९"],
      ["\\]", "]"],
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
      ["\\|", "ॠ"],
      ["\\\\", "ॄ"],
      ["A", "ओ"],
      ["a", "ो"],
      ["S", "ए"],
      ["s", "े"],
      ["D", "अ"],
      ["d", "्"],
      ["F", "इ"],
      ["f", "ि"],
      ["G", "उ"],
      ["g", "ु"],
      ["H", "फ"],
      ["h", "प"],
      ["j", "र"],
      ["K", "ख"],
      ["k", "क"],
      ["L", "थ"],
      ["l", "त"],
      [":", "छ"],
      [";", "च"],
      ['"', "ठ"],
      ["\\'", "ट"],
      ["X", "ँ"],
      ["x", "ं"],
      ["C", "ण"],
      ["c", "म"],
      ["v", "न"],
      ["b", "व"],
      ["N", "ळ"],
      ["n", "ल"],
      ["M", "श"],
      ["m", "स"],
      ["\\<", "ष"],
      [",", ","],
      ["\\>", "।"],
      ["\\.", "."],
      ["/", "य"],
      ["\\%", "ज्ञ"],
      ["\\^", "त्र"],
      ["\\&", "क्ष"],
      ["\\*", "श्र"],
    ],
    patterns_x: [
      ["1", "\u200d"],
      ["2", "\u200c"],
      ["4", "₹"],
      ["e", "॑"],
      ["R", "ॡ"],
      ["r", "ॣ"],
      ["d", "॒"],
      ["F", "ऌ"],
      ["f", "ॢ"],
      ["H", "फ़"],
      ["X", "ॐ"],
      ["\\>", "ऽ"],
      ["\\.", "॥"],
    ],
  };

  $.ime.register(saInScript2);
})(jQuery);