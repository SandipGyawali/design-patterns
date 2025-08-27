// Flyweight (shared object)
class Circle {
  public color: string;
  constructor(color: string) {
    this.color = color;
  }

  draw(x: number, y: number, radius: number) {
    console.log(
      `Drawing a ${this.color} circle at (${x}, ${y}) with radius ${radius}`
    );
  }
}

// Flyweight Factory (reuses circles by color)
class CircleFactory {
  private static circles: Record<string, Circle> = {};

  static getCircle(color: string): Circle {
    if (!this.circles[color]) {
      this.circles[color] = new Circle(color);
      console.log(`Created new ${color} circle`);
    }
    return this.circles[color];
  }
}

const redCircle1 = CircleFactory.getCircle("red");
redCircle1.draw(10, 20, 5);

const redCircle2 = CircleFactory.getCircle("red");
redCircle2.draw(15, 25, 10);

const blueCircle = CircleFactory.getCircle("blue");
blueCircle.draw(30, 40, 8);
