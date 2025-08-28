interface MyIterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

interface IterableCollection<T> {
  createIterator(): MyIterator<T>;
}

class NameCollection implements IterableCollection<string> {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  createIterator(): MyIterator<string> {
    return new NameIterator(this.items);
  }
}

class NameIterator implements MyIterator<string> {
  private index = 0;
  private items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  next(): string | null {
    if (this.hasNext()) {
      return this.items[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }
}

const collection = new NameCollection();
collection.addItem("Alice");
collection.addItem("Bob");
collection.addItem("Charlie");

const iterator = collection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
