interface IEngine {
  type: string;
}
interface ICockpit {
  type: string;
}

interface IAircraftFactory {
  createEngine(): IEngine;
  createCockpit(): ICockpit;
}

class F16Factory implements IAircraftFactory {
  createEngine(): IEngine {
    return { type: "F16 Engine" };
  }
  createCockpit(): ICockpit {
    return { type: "F16 Cockpit" };
  }
}

class BoeingFactory implements IAircraftFactory {
  createEngine(): IEngine {
    return { type: "Boeing Engine" };
  }
  createCockpit(): ICockpit {
    return { type: "Boeing Cockpit" };
  }
}

// Client code
function assembleAircraft(factory: IAircraftFactory) {
  const engine = factory.createEngine();
  const cockpit = factory.createCockpit();
  console.log(`Aircraft with ${engine.type} & ${cockpit.type}`);
}

assembleAircraft(new F16Factory());
assembleAircraft(new BoeingFactory());
