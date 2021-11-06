class Circle {
    constructor(public radius: number) { }
  }
  class Square {
    constructor(public sideLength: number) { }
  }
  
  type Shape = Circle | Square
  
  
  // ---cut---
  function getArea(shape: Shape) {
    if (shape instanceof Circle) {
      return Math.PI * shape.radius! ** 2;
    }
    return shape.sideLength ** 2;
  
  }
  
  console.log(getArea(new Circle(12)))
  console.log(getArea(new Square(12)))