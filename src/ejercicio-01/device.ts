import { Item } from "./item";

/**
 * Represents an Device item.
 */
export class Device implements Item {

  /**
   * Creates a new Device instance.
   * @param name - The name of the Device.
   * @param type - The type of the Device.
   * @param weight - The weight of the Device.
   * @param fragile - Indicates if the Device is fragile.
   * @param value - The value of the Device.
   */
  constructor(public name: string, public type: string, public weight?: number, public fragile?: boolean, public value?: number) {
  }
}