/**
 * Represents an item.
 */
export interface Item {
  /**
   * The name of the item.
   */
  name: string;

  /**
   * The weight of the item (optional).
   */
  weight?: number;

  /**
   * Indicates if the item is fragile (optional).
   */
  fragile?: boolean;

  /**
   * The value of the item (optional).
   */
  value?: number;
}
