(function ($) {
  "use strict";

  var gotStandard = {
    id: "got-standard",
    name: "π²πΏππΉππΊπ° ππ°πΆπ³π°",
    description: "Gothic keyboard layout",
    date: "2016-06-27",
    URL: "http://github.com/wikimedia/jquery.ime",
    author: "Bokareis",
    license: "GPLv3",
    version: "1.0",
    patterns: [
      ["a", "π°"],
      ["b", "π±"],
      ["g", "π²"],
      ["d", "π³"],
      ["e", "π΄"],
      ["q", "π΅"],
      ["z", "πΆ"],
      ["h", "π·"],
      ["T", "πΈ"],
      ["i", "πΉ"],
      ["k", "πΊ"],
      ["l", "π»"],
      ["m", "πΌ"],
      ["n", "π½"],
      ["j", "πΎ"],
      ["u", "πΏ"],
      ["p", "π"],
      ["c", "π"],
      ["r", "π"],
      ["s", "π"],
      ["t", "π"],
      ["w", "π"],
      ["f", "π"],
      ["x", "π"],
      ["v", "π"],
      ["o", "π"],
      ["y", "π"],
    ],
  };

  $.ime.register(gotStandard);
})(jQuery);
