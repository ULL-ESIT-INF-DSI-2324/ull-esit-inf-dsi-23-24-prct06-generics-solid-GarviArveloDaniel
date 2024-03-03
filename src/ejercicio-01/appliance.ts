import { Item } from "./item";

/**
 * Represents an Appliance item.
 */
export class Appliance implements Item {
  /**
   * The name of the appliance.
   */
  name: string;
  
  /**
   * The weight of the appliance.
   */
  weight?: number;
  
  /**
   * Indicates if the appliance is fragile.
   */
  fragile?: boolean;
  
  /**
   * The value of the appliance.
   */
  value?: number;
  
  /**
   * The type of the appliance.
   */
  type: string;

  /**
   * Creates a new Appliance instance.
   * @param name - The name of the appliance.
   * @param type - The type of the appliance.
   * @param weight - The weight of the appliance.
   * @param fragile - Indicates if the appliance is fragile.
   * @param value - The value of the appliance.
   */
  constructor(name: string, type: string, weight?: number, fragile?: boolean, value?: number) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.fragile = fragile;
    this.value = value;
  }
}