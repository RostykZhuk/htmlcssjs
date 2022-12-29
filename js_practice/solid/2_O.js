// Open close Principle

// Second Principle

class Shape {
  area() {
    throw new Error('Area method should be implemented');
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}
// I заказчик каже шо помимо квадратів і кругів потрібно добавити прямокутник якого тоже рахувати його площу

// Ми реалізували метод аrеа в кожному Shape і нам не потрібно вираховувати все провірками

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
// Приклад трикутника і нам непотрібно міняти логіку

class Triangle extends Shape {
  // Прямокутний трикутник
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  area() {
    return (this.a * this.b) / 2;
  }
}

class AreaCalcuator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  //   method sum is done and we don't need to change it
  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalcuator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rect(10, 20),
  new Triangle(10, 15),
]);

console.log(calc.sum());
