import "mocha";
import { expect } from "chai";
import { Furniture } from "../../src/ejercicio-01/furniture";

describe("Furniture", () => {
  it("should create a furniture object with the correct properties", () => {
    const furniture = new Furniture("Chair", "Comfortable chair", 10, false, 100);
    expect(furniture.name).to.equal("Chair");
    expect(furniture.description).to.equal("Comfortable chair");
    expect(furniture.weight).to.equal(10);
    expect(furniture.fragile).to.equal(false);
    expect(furniture.value).to.equal(100);
  });
});
