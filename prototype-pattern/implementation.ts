class F16Engine {
  public type: string;
  constructor(type: string = "Default F16 Engine") {
    this.type = type;
  }
}

// Prototype Interface
interface IAircraftPrototype {
  fly(): void;
  clone(): IAircraftPrototype;
  setEngine(engine: F16Engine): void;
}

class F16 implements IAircraftPrototype {
  private f16Engine: F16Engine = new F16Engine();

  fly(): void {
    console.log("F-16 flying...");
  }

  clone(): IAircraftPrototype {
    // Deep clone self
    const cloned = new F16();
    cloned.setEngine(new F16Engine(this.f16Engine.type));
    return cloned;
  }

  setEngine(engine: F16Engine): void {
    this.f16Engine = engine;
  }
}

const prototype = new F16();

const f16A = prototype.clone();
f16A.setEngine(new F16Engine("F16A Engine"));
console.log(f16A);

const f16B = prototype.clone();
f16B.setEngine(new F16Engine("F16B Engine"));
console.log(f16B);
