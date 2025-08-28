// used to define grammer for a lanauge

interface Expression {
  interpret(): number;
}

class NumberExpression implements Expression {
  private value: number;
  constructor(value: number) {
    this.value = value;
  }

  interpret(): number {
    return this.value;
  }
}

class AddExpression implements Expression {
  private left: Expression;
  private right: Expression;
  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class SubtractExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const three = new NumberExpression(3);

const addExpr = new AddExpression(five, ten); // (5 + 10)
const subtractExpr = new SubtractExpression(addExpr, three); // (5 + 10) - 3

console.log("Result:", subtractExpr.interpret()); // Result: 12
