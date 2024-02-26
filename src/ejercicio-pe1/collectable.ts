
/**
 * Interfaz generica con una serie de metodos.
 */
export interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T;
  removeItem(): void;
  getNumberOfItems(): number;
}