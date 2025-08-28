// observer interface
interface Observer {
  update(message: string): void;
}

// subject interface (Publisher)
interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(message: string): void;
}

class YoutubeChannel implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
    console.log("New subscriber added!");
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((sub) => sub != observer);
    console.log("Subscriber removed!");
  }

  notify(message: string): void {
    console.log(`Channel notification: ${message}`);
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Subscriber implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received notification: ${message}`);
  }
}

// create youtube channel
const channel = new YoutubeChannel();

// create subscribers
const alice = new Subscriber("Alice");
const bob = new Subscriber("Bob");

// subscribe them to channel
channel.subscribe(alice);
channel.subscribe(bob);

// upload video
channel.notify("New video uploaded: Observer Pattern in Typescript!");

// bob unsubscribes
channel.unsubscribe(bob);

// channel uploads another video
channel.notify("New video uploaded: Strategy Pattern");
