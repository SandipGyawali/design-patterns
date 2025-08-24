export interface IAircraft {
  engine: string;
  wings: string;
  cockpit: string;
  bathrooms?: string;

  describe: () => void;
}

class Aircraft implements IAircraft {
  engine: string;
  wings: string;
  cockpit: string;
  bathrooms?: string;

  describe(): void {
    console.log(`
      Engine: ${this.engine}
      Wings: ${this.wings}
      Cockpit: ${this.cockpit}
      Bathrooms: ${this.bathrooms ?? "None"}
    `);
  }
}

// concrete products
class Boeing747 extends Aircraft {}
class F16 extends Aircraft {}

abstract class AircraftBuilder {
  public buildEngine() {}
  public buildWings() {}
  public buildCockpit() {}
  public buildBathrooms() {}
  public getResult() {}
}

class Boeing747Builder extends AircraftBuilder {
  private boeing747: Boeing747 = new Boeing747();

  constructor() {
    super();
    this.boeing747 = new Boeing747();
  }

  buildEngine(): Boeing747Builder {
    this.boeing747.engine = "4x Rolce Royace Engines";
    return this;
  }
  buildWings(): Boeing747Builder {
    this.boeing747.wings = "Large gas tank wings";
    return this;
  }
  buildCockpit(): Boeing747Builder {
    this.boeing747.cockpit = "Commercial pilot cockpit";
    return this;
  }
  buildBathrooms(): Boeing747Builder {
    this.boeing747.bathrooms = "Multiple passenger bathrooms";
    return this;
  }
  getResult(): Boeing747 {
    return this.boeing747;
  }
}

class F16Builder extends AircraftBuilder {
  private f16: F16;

  constructor() {
    super();
    this.f16 = new F16();
  }

  public buildEngine(): F16Builder {
    this.f16.engine = "4x Jet Engines";
    return this;
  }
  public buildCockpit(): F16Builder {
    this.f16.cockpit = "Large two seater cockpit";
    return this;
  }
  public buildWings(): F16Builder {
    this.f16.wings = "built two wings";
    return this;
  }
  public getResult(): F16 {
    return this.f16;
  }
}

// using director method
class Director {
  private aircraftBuilder: AircraftBuilder;

  constructor(aircraftBuilder: AircraftBuilder) {
    this.aircraftBuilder = aircraftBuilder;
  }

  construct(isPassenger: boolean) {
    this.aircraftBuilder.buildCockpit();
    this.aircraftBuilder.buildEngine();
    this.aircraftBuilder.buildWings();

    if (isPassenger) {
      this.aircraftBuilder.buildBathrooms();
    }
  }
}

// using director method for building instance
const f16Builder: F16Builder = new F16Builder();
const director: Director = new Director(f16Builder);
director.construct(false);
const f16 = f16Builder.getResult();
console.log(f16);

// without using director method
const boeing747Builder = new Boeing747Builder();
boeing747Builder.buildBathrooms().buildCockpit().buildEngine().buildWings();
const boeing747 = boeing747Builder.getResult();
console.log(boeing747);
