// Implementor Interface
interface IEngine {
  startEngine(): void;
}

class F16Engine implements IEngine {
  startEngine(): void {
    console.log("F16 Engine starting...");
  }
}

class BoeingEngine implements IEngine {
  startEngine(): void {
    console.log("Boeing Engine starting...");
  }
}

abstract class Aircraft {
  protected engine: IEngine;
  constructor(engine: IEngine) {
    this.engine = engine;
  }
  abstract fly(): void;
}

class FighterJet extends Aircraft {
  fly(): void {
    console.log("Fighter Jet preparing for takeoff...");
    this.engine.startEngine();
    console.log("Fighter Jet is flying!");
  }
}

class PassengerPlane extends Aircraft {
  fly(): void {
    console.log("Passenger Plane preparing for takeoff...");
    this.engine.startEngine();
    console.log("Passenger Plane is flying!");
  }
}

const f16 = new FighterJet(new F16Engine());
f16.fly();
console.log("\n");
const boeing = new PassengerPlane(new BoeingEngine());
boeing.fly();
