// The Visitor Pattern is a behavioral design pattern that lets you separate
// an algorithm from the objects it operates on.

interface Visitor {
  visitClothesStore(store: ClothesStore): void;
  visitElectronicsStore(store: ElectronicsStore): void;
}

interface Store {
  accept(visitor: Visitor): void;
}

class ClothesStore implements Store {
  public numOfItems: number;
  constructor(numOfItems: number) {
    this.numOfItems = numOfItems;
  }

  accept(visitor: Visitor): void {
    visitor.visitClothesStore(this);
  }
}

class ElectronicsStore implements Store {
  public numOfItems: number;
  constructor(numOfItems: number) {
    this.numOfItems = numOfItems;
  }

  accept(visitor: Visitor): void {
    visitor.visitElectronicsStore(this);
  }
}

class DiscountVisitor implements Visitor {
  visitClothesStore(store: ClothesStore): void {
    console.log(`Clothes discount: ${store.numOfItems * 10}%`);
  }

  visitElectronicsStore(store: ElectronicsStore): void {
    console.log(`Electronics discount: ${store.numOfItems * 5}%`);
  }
}

// Visitor Pattern allows adding operations without modifying classes
const stores: Store[] = [new ClothesStore(10), new ElectronicsStore(5)];
const discountVisitor = new DiscountVisitor();

for (const store of stores) {
  store.accept(discountVisitor);
}
