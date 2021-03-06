/*jslint sloppy:true browser:true */
/*global esprima:true */
var compareId;
function compare() {
  if (compareId) {
    window.clearTimeout(compareId);
  }

  function stringify(node) {
    var result;

    if (typeof node !== "object") {
      throw new Error("Node is not valid");
    }
    if (typeof node.type !== "string") {
      throw new Error("Node does not have type property");
    }

    switch (node.type) {
      case "Program":
        if (node.body.length !== 1) {
          throw new Error("Expression is too complex");
        }
        result = stringify(node.body[0]);
        if (result[0] === "(" && result[result.length - 1] === ")") {
          result = result.substr(1, result.length - 2);
        }
        break;

      case "ExpressionStatement":
        result = stringify(node.expression);
        break;

      case "BinaryExpression":
      case "LogicalExpression":
        result =
          "(" +
          stringify(node.left) +
          " " +
          node.operator +
          " " +
          stringify(node.right) +
          ")";
        break;

      case "UnaryExpression":
        result = "(" + node.operator;
        if (node.operator.length > 2) {
          // delete void typeof
          result += " ";
        }
        result += stringify(node.argument) + ")";
        break;

      case "UpdateExpression":
        result = stringify(node.argument);
        if (node.prefix) {
          result = node.operator + result;
        } else {
          result = result + node.operator;
        }
        result = "(" + result + ")";
        break;

      case "Literal":
        result = node.value.toString();
        if (typeof node.value === "string") {
          result = '"' + node.value + '"';
        }
        break;

      case "Identifier":
        result = node.name;
        break;

      default:
        break;
    }

    if (!result) {
      throw new Error("Unknown node type: " + node.type);
    }

    return result;
  }

  function setText(el, str) {
    if (typeof el.innerText === "string") {
      el.innerText = str;
    } else {
      el.textContent = str;
    }
  }

  compareId = window.setTimeout(function () {
    var a, b, answer, status, expr, left, right, suggest;

    a = document.getElementById("a");
    b = document.getElementById("b");
    answer = document.getElementById("answer");
    status = document.getElementById("status");
    expr = document.getElementById("expr");

    a.setAttribute("class", "");
    b.setAttribute("class", "");
    answer.setAttribute("class", "");

    setText(answer, "");
    setText(status, "");
    setText(expr, "");

    try {
      left = esprima.parse(
        typeof a.innerText === "string" ? a.innerText : a.textContent
      );
    } catch (e_left) {
      a.setAttribute("class", "lightred");
    }

    try {
      right = esprima.parse(
        typeof b.innerText === "string" ? b.innerText : b.textContent
      );
    } catch (e_right) {
      b.setAttribute("class", "lightred");
    }

    try {
      suggest = stringify(left);
    } catch (e_suggest) {
      a.setAttribute("class", "lightred");
    }

    if (left && right) {
      if (JSON.stringify(left) === JSON.stringify(right)) {
        setText(answer, "Yes");
        answer.setAttribute("class", "yes");
      } else {
        setText(answer, "No");
        answer.setAttribute("class", "no");
        setText(status, suggest ? "It is more like " : "");
        setText(expr, suggest || "");
      }
    } else {
      answer.setAttribute("class", "");
    }

    compareId = undefined;
  }, 57);
}

if (typeof document.body.attachEvent === "object") {
  // Workaround for old Internet Explorer.
  // Until there is a reliable way to track the modification to the editable
  // inputs, manually track the change periodically.
  window.setInterval(compare, 500);
}

// See http://mathiasbynens.be/notes/oninput for details.
document.getElementById("a").onkeyup = compare;
document.getElementById("a").oninput = function () {
  this.onkeyup = null;
  compare();
};
document.getElementById("b").onkeyup = compare;
document.getElementById("b").oninput = function () {
  this.onkeyup = null;
  compare();
};
compare();
