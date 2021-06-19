// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2011 Google Inc. johnjbarton@google.com

/*global console window*/

function onClickDebug(event) {
  saveOptions();
}

function setDebug(options, setting) {
  if (options[setting]) {
    document.getElementById(setting).checked = true;
  }
}

function restore() {
  var options = restoreOptions();
  if (options) {
    var sites = options.allowedSites;
    if (sites && sites instanceof Array) {
      sites.forEach(addAllowedSiteRow);
    }
    setDebug(options, "debugConnection");
    setDebug(options, "debugMessages");
    setDebug(options, "debugWarnings");
    setDebug(options, "debugAdapters");

    var extensionInfos = options.extensionInfos;
    if (extensionInfos && extensionInfos instanceof Array) {
      extensionInfos.forEach(addExtensionInfosRow);
    }
  }
  // the default UI will work for no-options-set-yet
}

function cloneElementByClass(className) {
  var template = document.querySelector("." + className);
  var elt = template.cloneNode(true);
  elt.classList.remove(className);
  template.parentNode.insertBefore(elt, template);
  return elt;
}

function addAllowedSiteRow(option) {
  var origin = ensureOrigin(option.site);
  if (!origin) {
    throw new Error(option.site + " does not have a valid origin");
  }
  var row = cloneElementByClass("allowedSite-template");
  var input = row.getElementsByClassName("origin")[0];
  input.value = option.site;
  input = row.querySelector(".contextMenuId");
  input.value = option.name;
}

function addExtensionInfosRow(extensionInfo) {
  var row = cloneElementByClass("extensionInfo-template");
  var input = row.getElementsByClassName("extensionInfo-startPage")[0];
  input.value = extensionInfo.startPage;
  input = row.querySelector(".extensionInfo-name");
  input.value = extensionInfo.name;
}

function eachUserInput(row, fnc) {
  var userInputs = row.querySelectorAll(".userInput");
  for (var i = 0; i < userInputs.length; i++) {
    fnc(userInputs[i]);
  }
}

// From editing to saved
function save(row) {
  saveOptions();
  console.log("save", row);
  eachUserInput(row, function (elt) {
    elt.setAttribute("disabled", "disabled");
  });
  row.classList.remove("stateEditing");
  row.classList.add("stateSaved");
}

// From saved to editing
function edit(row) {
  eachUserInput(row, function (elt) {
    elt.removeAttribute("disabled");
  });
  row.classList.remove("stateSaved");
  row.classList.add("stateEditing");
}

function getRow(event) {
  var action = event.target;
  var row = action;
  while (row.localName !== "tr") {
    row = row.parentElement;
    if (!row) {
      return; // FAIL
    }
  }
  return row;
}

function changeState(event) {
  var row = getRow(event);
  if (row) {
    if (row.classList.contains("stateEditing")) {
      save(row);
    } else if (row.classList.contains("stateSaved")) {
      edit(row);
    } else {
      console.error("Bad state " + row.classList);
    }
  }
}

function revertState(event) {
  var row = getRow(event);
  if (row) {
    if (row.classList.contains("stateEditing")) {
      row.parentElement.removeChild(row);
      saveOptions();
    } else if (row.classList.contains("stateSaved")) {
      row.parentElement.removeChild(row);
      saveOptions();
    } else {
      console.error("Bad state " + row.classList);
    }
  }
}

function highlightSave(event) {
  var save = document.getElementById("save");
  save.classList.add("youShouldSave");
  status.innerHTML = "";
}

function onAddRow(event) {
  edit(cloneElementByClass("allowedSite-template"));
}

function createSelector(elt) {
  var selector = [];
  var classList = elt.classList;
  for (var i = 0; i < classList.length; i++) {
    selector.push("." + classList[i]);
  }
  return selector.join("");
}

function addListeners() {
  var addAllowedSiteRow = document.getElementById("addAllowedSiteRow");
  addAllowedSiteRow.addEventListener(
    "click",
    function (event) {
      edit(cloneElementByClass("allowedSite-template"));
    },
    false
  );

  var addExtensionInfosRow = document.querySelector(".addExtensionInfosRow");
  addExtensionInfosRow.addEventListener(
    "click",
    function (event) {
      edit(cloneElementByClass("extensionInfo-template"));
    },
    false
  );

  document.body.addEventListener("click", function redispatch(event) {
    var elt = event.target;
    var selector = createSelector(elt);
    if (elt.classList.contains("save") || elt.classList.contains("edit"))
      changeState(event);
    else if (elt.classList.contains("remove")) revertState(event);
    else if (elt.classList.contains("debugOption")) onClickDebug(event);
    else return;

    event.stopPropagation();
  });
}

function onLoad() {
  restore();
  addListeners();
}

window.addEventListener("load", onLoad, false);

window.onbeforeunload = function (event) {
  var editings = document.getElementsByClassName("stateEditing");

  if (editings.length > 0) {
    event.returnValue = "You have unsaved edits";
    return event.returnValue;
  }
};
