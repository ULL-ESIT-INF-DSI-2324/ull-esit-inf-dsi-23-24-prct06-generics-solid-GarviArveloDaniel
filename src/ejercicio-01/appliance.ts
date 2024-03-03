import { Item } from "./item";

/**
 * Represents an Appliance item.
 */
export class Appliance implements Item {

  /**
   * Creates a new Appliance instance.
   * @param name - The name of the appliance.
   * @param type - The type of the appliance.
   * @param weight - The weight of the appliance.
   * @param fragile - Indicates if the appliance is fragile.
   * @param value - The value of the appliance.
   */
  constructor(public name: string, public type: string, public weight?: number, public fragile?: boolean, public value?: number) {
  }
}