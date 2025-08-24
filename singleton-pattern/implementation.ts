// in case of java for multi thread singleton-instance synchronized is used.
class AirForceOne {
  private static onlyInstance?: AirForceOne;

  private constructor() {}

  public fly() {
    console.log("Airforce one is flying");
  }

  public static getInstance() {
    if (!this.onlyInstance) {
      this.onlyInstance = new AirForceOne();
    }

    return this.onlyInstance;
  }
}

const obj = AirForceOne.getInstance();
obj.fly();
