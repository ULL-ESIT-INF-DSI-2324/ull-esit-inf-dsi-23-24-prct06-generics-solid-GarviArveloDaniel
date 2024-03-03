import { Item } from "./item";
import { Box } from "./box";

/**
 * Represents a Moving Manager that manages boxes of items.
 * @template T - The type of items that can be stored in the boxes.
 */
export class MovingManager<T extends Item> {
  private boxes: Box<T>[] = [];

  /**
   * Adds a box to the moving manager.
   * @param box - The box to be added.
   */
  addBox(box: Box<T>): void {
    this.boxes.push(box);
  }

  /**
   * Removes a box from the moving manager based on its id.
   * @param id - The id of the box to be removed.
   */
  removeBox(id: number): void {
    this.boxes = this.boxes.filter((box) => box.id !== id);
  }

  /**
   * Gets the count of boxes in the moving manager.
   * @returns The count of boxes.
   */
  getBoxesCount(): number {
    return this.boxes.length;
  }

  /**
   * Returns a string representation of all the boxes and their items in the moving manager.
   * @returns The string representation of the boxes and their items.
   */
  BoxesString(): string {
    return this.boxes.map((box) => box.listItems()).join("\n");
  }
}
