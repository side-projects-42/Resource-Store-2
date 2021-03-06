//JavaScript zEvents Library v1.0 by Nicholas C. Zakas, http://www.nczonline.net
function zEvent() {
  this.type = null;
  this.target = null;
  this.relatedTarget = null;
  this.cancelable = false;
  this.timeStamp = null;
  this.returnValue = true;
}
zEvent.prototype.initEvent = function ($a, $b) {
  this.type = $a;
  this.cancelable = $b;
  this.timeStamp = new Date().getTime();
};
zEvent.prototype.preventDefault = function () {
  if (this.cancelable) {
    this.returnValue = false;
  }
};
function zEventTarget() {
  this.eventhandlers = new Object();
}
zEventTarget.prototype.addEventListener = function ($a, $z) {
  if (typeof this.eventhandlers[$a] == "undefined") {
    this.eventhandlers[$a] = new Array();
  }
  this.eventhandlers[$a].push($z);
};
zEventTarget.prototype.dispatchEvent = function ($d) {
  $d.target = this;
  if (typeof this.eventhandlers[$d.type] != "undefined") {
    for (var i = 0; i < this.eventhandlers[$d.type].length; i++) {
      this.eventhandlers[$d.type][i]($d);
    }
  }
  return $d.returnValue;
};
zEventTarget.prototype.removeEventListener = function ($a, $z) {
  if (typeof this.eventhandlers[$a] != "undefined") {
    var $e = new Array();
    for (var i = 0; i < this.eventhandlers[$a].length; i++) {
      if (this.eventhandlers[$a][i] != $z) {
        $e.push(this.eventhandlers[$a][i]);
      }
    }
    this.eventhandlers[$a] = $e;
  }
};
//JavaScript zDragDrop Library v1.0 by Nicholas C. Zakas, http://www.nczonline.net
function zDrag() {}
zDrag.current = null;
zDrag.dragging = false;
zDrag.isDragging = function () {
  return this.dragging;
};
zDrag.setCurrent = function ($a) {
  this.current = $a;
  this.dragging = true;
};
zDrag.getCurrent = function () {
  return this.current;
};
zDrag.clearCurrent = function () {
  this.current = null;
  this.dragging = false;
};
function zDraggable($b, $z) {
  zEventTarget.call(this);
  this.construct($b, $z);
  this.diffX = 0;
  this.diffY = 0;
  this.targets = [];
}
zDraggable.prototype = new zEventTarget();
zDraggable.DRAG_X = 1;
zDraggable.DRAG_Y = 2;
zDraggable.prototype.addDropTarget = function ($e) {
  this.targets.push($e);
};
zDraggable.prototype.construct = function ($b, $z) {
  this.element = $b;
  this.constraints = $z;
  var $f = this;
  var $g = function () {
    var $h = new zDragDropEvent();
    $h.initDragDropEvent("dragstart", true);
    if ($f.dispatchEvent($h)) {
      var $i = arguments[0] || window.event;
      $f.diffX = $i.clientX - $f.element.offsetLeft;
      $f.diffY = $i.clientY - $f.element.offsetTop;
      $f.attachEventHandlers();
      zDrag.setCurrent($f);
    }
  };
  if (this.element.addEventListener) {
    this.element.addEventListener("mousedown", $g, false);
  } else if (this.element.attachEvent) {
    this.element.attachEvent("onmousedown", $g);
  } else {
    throw new Error("zDrag not supported in this browser.");
  }
};
zDraggable.prototype.attachEventHandlers = function () {
  var $f = this;
  this.tempMouseMove = function () {
    var $i = arguments[0] || window.event;
    var $j = $i.clientX - $f.diffX;
    var $k = $i.clientY - $f.diffY;
    if ($f.constraints & zDraggable.DRAG_X) {
      $f.element.style.left = $j;
    }
    if ($f.constraints & zDraggable.DRAG_Y) {
      $f.element.style.top = $k;
    }
    var $l = new zDragDropEvent();
    $l.initDragDropEvent("drag", false);
    $f.dispatchEvent($l);
  };
  $f.tempMouseUp = function () {
    var $i = arguments[0] || window.event;
    var $e = $f.getDropTarget($i.clientX, $i.clientY);
    if ($e != null) {
      var $m = new zDragDropEvent();
      $m.initDragDropEvent("drop", false, $f);
      $e.dispatchEvent($m);
    }
    var $n = new zDragDropEvent();
    $n.initDragDropEvent("dragend", false);
    $f.dispatchEvent($n);
    zDrag.clearCurrent();
    $f.detachEventHandlers();
  };
  if (document.body.addEventListener) {
    document.body.addEventListener("mousemove", this.tempMouseMove, false);
    document.body.addEventListener("mouseup", this.tempMouseUp, false);
  } else if (document.body.attachEvent) {
    document.body.attachEvent("onmousemove", this.tempMouseMove);
    document.body.attachEvent("onmouseup", this.tempMouseUp);
  } else {
    throw new Error("zDrag doesn't support this browser.");
  }
};
zDraggable.prototype.detachEventHandlers = function () {
  if (document.body.removeEventListener) {
    document.body.removeEventListener("mousemove", this.tempMouseMove, false);
    document.body.removeEventListener("mouseup", this.tempMouseUp, false);
  } else if (document.body.detachEvent) {
    document.body.detachEvent("onmousemove", this.tempMouseMove);
    document.body.detachEvent("onmouseup", this.tempMouseUp);
  } else {
    throw new Error("zDrag doesn't support this browser.");
  }
};
zDraggable.prototype.getDropTarget = function (iX, iY) {
  for (var i = 0; i < this.targets.length; i++) {
    if (this.targets[i].isOver(iX, iY)) {
      return this.targets[i];
    }
  }
  return null;
};
zDraggable.prototype.moveTo = function (iX, iY) {
  this.element.style.left = iX + "px";
  this.element.style.top = iY + "px";
};
zDraggable.prototype.getLeft = function () {
  return this.element.offsetLeft;
};
zDraggable.prototype.getTop = function () {
  return this.element.offsetTop;
};
function zDragDropEvent() {
  zEvent.call(this);
}
zDragDropEvent.prototype = new zEvent();
zDragDropEvent.prototype.initDragDropEvent = function ($p, $q, $r) {
  this.initEvent($p, $q);
  this.relatedTarget = $r;
};
function zDropTarget($b) {
  zEventTarget.call(this);
  this.construct($b);
}
zDropTarget.prototype = new zEventTarget();
zDropTarget.prototype.construct = function ($b) {
  this.element = $b;
};
zDropTarget.prototype.isOver = function (iX, iY) {
  var $s = this.element.offsetLeft;
  var $t = $s + this.element.offsetWidth;
  var $u = this.element.offsetTop;
  var $v = $u + this.element.offsetHeight;
  return iX >= $s && iX <= $t && iY >= $u && iY <= $v;
};
zDropTarget.prototype.getLeft = function () {
  return this.element.offsetLeft;
};
zDropTarget.prototype.getTop = function () {
  return this.element.offsetTop;
};
zDropTarget.prototype.getHeight = function () {
  return this.element.offsetHeight;
};
zDropTarget.prototype.getWidth = function () {
  return this.element.offsetWidth;
};
