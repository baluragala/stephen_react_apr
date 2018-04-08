class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

var c1 = new Point();
c1.x = 10;
c1.y = 20;
console.log(c1);

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
  toString() {
    return super.toString() + " in " + this.color;
  }
}

const cp = new ColorPoint(25, 8, "green");
cp.toString();
