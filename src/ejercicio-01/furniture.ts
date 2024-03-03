import { Item } from "./item";

/**
 * Represents a piece of furniture.
 */
export class Furniture implements Item {
  /** The name of the furniture. */
  name: string;
  /** The weight of the furniture. */
  weight?: number;
  /** Indicates if the furniture is fragile. */
  fragile?: boolean;
  /** The value of the furniture. */
  value?: number;
  /** A description of the furniture. */
  description: string;

  /**
   * Creates a new instance of the Furniture class.
   * @param name - The name of the furniture.
   * @param description - A description of the furniture.
   * @param weight - The weight of the furniture.
   * @param fragile - Indicates if the furniture is fragile.
   * @param value - The value of the furniture.
   */
  constructor(name: string, description: string, weight?: number, fragile?: boolean, value?: number) {
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.fragile = fragile;
    this.value = value;
  }
}
