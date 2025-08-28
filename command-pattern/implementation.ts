interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  turnOn(): void {
    console.log("Light is ON");
  }

  turnOff(): void {
    console.log("Light is OFF");
  }
}

class TurnOnLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

class TurnOffLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

class RemoteControl {
  private history: Command[] = [];

  submit(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undo(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

const light = new Light();
const remote = new RemoteControl();

const turnOn = new TurnOnLightCommand(light);
const turnOff = new TurnOffLightCommand(light);

remote.submit(turnOn);
remote.submit(turnOff);

remote.undo();
