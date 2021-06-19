class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class A {
  classRef() {
    return A;
  }
};

var p = new Point(1, 2);
assertEquals(1, p.x);
assertEquals(2, p.y);

var p2 = new Point(3, 4);
assertEquals(3, p2.x);
assertEquals(4, p2.y);
assertEquals(1, p.x);
assertEquals(2, p.y);

for (var element in Point) {
  fail('Point contains static member : ' + element);
}

// Tests to ensure that we're not binding function identifier per class
var a = new A();
A = 42;
assertEquals(42, a.classRef());
