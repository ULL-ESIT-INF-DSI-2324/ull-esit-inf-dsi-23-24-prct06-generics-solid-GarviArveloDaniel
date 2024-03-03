import "mocha";
import { expect } from "chai";
import { Device } from "../../src/ejercicio-01/device";

describe("Device", () => {
  it("should create an Device object with the correct properties", () => {
    const device = new Device("TV", "Television", 20, true, 500);
    expect(device.name).to.equal("TV");
    expect(device.type).to.equal("Television");
    expect(device.weight).to.equal(20);
    expect(device.fragile).to.equal(true);
    expect(device.value).to.equal(500);
  });
});
