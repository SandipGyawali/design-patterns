interface Coffee {
  cost(): number;
  description(): string;
}

class Espresso implements Coffee {
  cost(): number {
    return 10;
  }
  description(): string {
    return "Espresso";
  }
}

abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }
  abstract cost(): number;
  abstract description(): string;
}

class Caramel extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 3;
  }
  description(): string {
    return this.coffee.description() + ", Caramel";
  }
}

class WhippedCream extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 4;
  }
  description(): string {
    return this.coffee.description() + ", Whipped Cream";
  }
}

let myCoffee: Coffee = new Espresso();
myCoffee = new Caramel(myCoffee);
myCoffee = new WhippedCream(myCoffee);

console.log(myCoffee.description(), "-", myCoffee.cost());
