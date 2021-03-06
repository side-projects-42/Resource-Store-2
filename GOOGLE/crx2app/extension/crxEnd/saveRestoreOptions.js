// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2011 Google Inc. johnjbarton@google.com

/*globals document window */

// used by options.html and crxEnd.js
// crx2app.options.allowedSites is array of {site: url, name: string}

var optionsKey = "crx2app.options";

function extractExtensionInfos(options) {
  options.allowedSites = [];

  var allowedSitesTable = document.getElementById("origins");
  var originElts = allowedSitesTable.getElementsByClassName("origin");
  for (var i = 0; i < originElts.length; i++) {
    var originElt = originElts[i];
    var origin = originElt.value;
    var contextMenuNameElt =
      originElt.parentElement.parentElement.querySelector(".contextMenuId");

    if (origin) {
      var allowedOrigin = ensureOrigin(origin);
      if (allowedOrigin !== origin) {
        var message = origin + " is not a Web origin";
        window.alert(message);
        throw new Error(message);
      }
      var name = contextMenuNameElt.value || "(none)";
      options.allowedSites.push({ site: origin, name: name });
    }
  }

  var debugConnection = document.getElementById("debugConnection");
  options.debugConnection = debugConnection.checked;

  var debugMessages = document.getElementById("debugMessages");
  options.debugMessages = debugMessages.checked;

  var debugWarnings = document.getElementById("debugWarnings");
  options.debugWarnings = debugWarnings.checked;

  var debugAdapters = document.getElementById("debugAdapters");
  options.debugAdapters = debugAdapters.checked;

  var warnReload = document.getElementById("warnReload");
  warnReload.classList.remove("hidden");
}

var defaultOptions = {};

var crx2appOptions = new ExtensionOptions(
  optionsKey,
  defaultOptions,
  extractExtensionInfos
);

function restoreOptions() {
  return crx2appOptions.restoreOptions();
}

function saveOptions() {
  crx2appOptions.saveOptions();
}
