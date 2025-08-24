interface IAircraft {
  fly(): void;
}

class HotAirBallon {
  gasUsed: string = "Helium";

  fly(gasUsed: string) {
    console.log(`FLy using ${gasUsed} gas`);
  }

  inflateWithGas() {
    return this.gasUsed;
  }
}

// adapter
class Adapter implements IAircraft {
  private hotAirBalloon: HotAirBallon;

  constructor(hotAirBalloon: HotAirBallon) {
    this.hotAirBalloon = hotAirBalloon;
  }

  fly(): void {
    const gas = this.hotAirBalloon.inflateWithGas();
    this.hotAirBalloon.fly(gas);
  }
}

const hotAirBalloon = new HotAirBallon();
const hotAirBalloonAdapter = new Adapter(hotAirBalloon);
hotAirBalloonAdapter.fly();
