// The Mediator Pattern defines an object (mediator)
//  that encapsulates communication between multiple objects (colleagues).

// Instead of objects talking directly to each other
// (tight coupling), they talk through a mediator.

interface Mediator {
  sendMessage(message: string, sender: User): void;
}

class User {
  private name: string;
  private mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }

  getName(): string {
    return this.name;
  }
}

class ChatRoomMediator implements Mediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(`${sender.getName()}: ${message}`);
      }
    }
  }
}

const chatRoom = new ChatRoomMediator();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

alice.send("Hello everyone!");
bob.send("Hi Alice!");
