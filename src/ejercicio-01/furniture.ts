import { Item } from "./item";

/**
 * Represents a piece of furniture.
 */
export class Furniture implements Item {

  /**
   * Creates a new instance of the Furniture class.
   * @param name - The name of the furniture.
   * @param description - A description of the furniture.
   * @param weight - The weight of the furniture.
   * @param fragile - Indicates if the furniture is fragile.
   * @param value - The value of the furniture.
   */
  constructor(public name: string, public description: string, public weight?: number, public fragile?: boolean, public value?: number) {
  }
}
