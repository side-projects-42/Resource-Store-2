class GetterA {
  get x() { return 'getter x'; }
  get y() { return 'getter y'; }
}

class GetterB extends GetterA {
  get x() { return super.x; }
}

class GetterC extends GetterB {
  get y() { return super.y; }
}

// ----------------------------------------------------------------------------

var b = new GetterB();
var c = new GetterC();

assertEquals('getter x', b.x);
assertEquals('getter y', c.y);
