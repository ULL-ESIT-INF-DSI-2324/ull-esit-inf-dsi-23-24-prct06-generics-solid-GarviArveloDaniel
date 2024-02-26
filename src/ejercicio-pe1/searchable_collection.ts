import { Collectable } from "./collectable";
import { Searchable } from "./searchable";

/**
 * Clase generica abstracta que define una collecion de elementos y
 * define los metodos de las interfaces Collectable y Searchable.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  public collection: T[] = [];

  /**
   * Constructor de la clase
   * @param items Array de elementos
   */
  constructor(items: T[]) {
    this.collection = items;
  }

  /**
   * Metodo para añadir un elemento a la coleccion
   * @param item Elemento a añadir
   */
  addItem(item: T): void {
    this.collection.push(item);
  }

  /**
   * Metodo para obtener el elemento que se encuntra en la posicion
   * index
   * @param index Indice de la posicion
   * @returns El elemento en esa posicion.
   */
  getItem(index: number): T {
    return this.collection[index];
  }

  /**
   * Metodo que elimina el ultimo elemento de la coleccion
   */
  removeItem(): void {
    this.collection.pop();
  }

  /**
   * Metodo que obtiene el numero de elementos de la coleccion.
   * @returns 
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Metodo abstracto
   * @param searchTerm Termino con el que se realiza la busqueda.
   */
  abstract search(searchTerm: T): unknown[];
}