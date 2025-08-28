// It provides a blueprint of an algorithm where subclasses can customize specific steps.

// Abstract class - defines the template
abstract class Beverage {
  // Template method (final algorithm)
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }

  // Steps to be implemented by subclasses
  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}

// Concrete class for Tea
class Tea extends Beverage {
  protected brew(): void {
    console.log("Steeping the tea");
  }

  protected addCondiments(): void {
    console.log("Adding lemon");
  }
}

// Concrete class for Coffee
class Coffee extends Beverage {
  protected brew(): void {
    console.log("Dripping coffee through filter");
  }

  protected addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}

// Usage
const tea = new Tea();
tea.prepareRecipe();

console.log("-----");

const coffee = new Coffee();
coffee.prepareRecipe();
