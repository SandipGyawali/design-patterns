interface Vehicle {
  drive(): void;
}

enum Type {
  SeaLogistics = "sea logistic",
  AirLogistics = "air logistic",
  LandLogistics = "land logistic",
}

class Ship implements Vehicle {
  drive() {
    console.log("Sailing the ship...");
  }
}

class Plane implements Vehicle {
  drive() {
    console.log("Flying the plane...");
  }
}

class Truck implements Vehicle {
  drive() {
    console.log("Driving the truck...");
  }
}

class LogisticsFactory {
  static createLogistics(type: Type): Vehicle {
    switch (type.toLowerCase()) {
      case Type.SeaLogistics:
        return new Ship();
      case Type.AirLogistics:
        return new Plane();
      case Type.LandLogistics:
        return new Truck();
      default:
        throw new Error("Invalid logistics type");
    }
  }
}

const airTransport = LogisticsFactory.createLogistics(Type.AirLogistics);
airTransport.drive();

const landTransport = LogisticsFactory.createLogistics(Type.LandLogistics);
landTransport.drive();
