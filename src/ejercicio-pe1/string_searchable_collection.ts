import { SearchableCollection } from "./searchable_collection";

/**
 * Clase hija de SearchCollectableItem
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * Implementacion del metodo abstracto search
   * @param searchTerm Termino con el que se realiza la busqueda
   * @returns Un array con todos los valores que contiene la cadena searchTerm
   */
  search(searchTerm: string): unknown[] {
    return this.collection.filter((item) => item.includes(searchTerm));
  }
}