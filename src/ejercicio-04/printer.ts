import { Printable } from "./interface_printable";

/**
 * Represents a Printer that implements the Printable interface.
 */
export class Printer implements Printable {

  /**
   * Prints the document.
   */
  print(): void {
    console.log("Printing...");
  }
}
