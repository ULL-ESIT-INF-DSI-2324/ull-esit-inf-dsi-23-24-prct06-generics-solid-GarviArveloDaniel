import "mocha";
import { expect } from "chai";
import { Appliance } from "../../src/ejercicio-01/appliance";

describe("Appliance", () => {
  it("should create an appliance object with the correct properties", () => {
    const appliance = new Appliance("TV", "Television", 20, true, 500);
    expect(appliance.name).to.equal("TV");
    expect(appliance.type).to.equal("Television");
    expect(appliance.weight).to.equal(20);
    expect(appliance.fragile).to.equal(true);
    expect(appliance.value).to.equal(500);
  });
});
