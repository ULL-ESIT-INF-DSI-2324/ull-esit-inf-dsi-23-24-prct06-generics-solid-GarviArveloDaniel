import { SearchableCollection } from "./searchable_collection";

/**
 * Clase hija de SearchCollectableItem
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Implementacion del metodo abstracto search
   * @param searchTerm Termino con el que se realiza la busqueda
   * @returns Un array con todos los valores iguales a searchTerm
   */
  search(searchTerm: number): unknown[] {
    return this.collection.filter((item) => item === searchTerm);
  }
}