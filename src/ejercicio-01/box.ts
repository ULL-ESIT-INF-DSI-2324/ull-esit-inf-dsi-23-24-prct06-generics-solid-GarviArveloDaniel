import { Item } from "./item";

/**
 * Represents a box that can hold items of type T.
 * @template T - The type of items that can be stored in the box.
 */
export class Box<T extends Item> {
  private items: T[] = [];
  public id: number;

  /**
   * Creates a new instance of the Box class.
   * @param id - The ID of the box.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Adds an item to the box.
   * @param item - The item to be added.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes an item from the box based on its name.
   * @param name - The name of the item to be removed.
   */
  removeItem(name: string): void {
    this.items = this.items.filter((item) => item.name !== name);
  }

  /**
   * Finds items in the box based on the specified filters.
   * @param filters - The filters to be applied.
   * @returns A string containing the names of the matching items, separated by commas.
   */
  findItems(filters: { name?: string; weight?: number; fragile?: boolean; value?: number }): string {
    const result = this.items.filter(
      (element) =>
        (!filters.name || element.name.includes(filters.name)) &&
        (!filters.weight || element.weight === filters.weight) &&
        (filters.fragile === undefined || element.fragile === filters.fragile) &&
        (!filters.value || element.value === filters.value)
    );
    return result.map((item) => item.name).join(", ");
  }

  /**
   * Lists all the items in the box.
   * @returns A string containing the ID of the box and the names of the items, separated by commas.
   */
  listItems(): string {
    const result = `${this.id}: ${this.items.map((item) => item.name).join(", ")}`;
    return result;
  }
}
