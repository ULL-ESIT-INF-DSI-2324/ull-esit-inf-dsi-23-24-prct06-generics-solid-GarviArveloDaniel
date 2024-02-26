/**
 * Interfaz generica con un unico metodo
 */
export interface Searchable<T> {
  search(searchTerm: T): unknown[];
}