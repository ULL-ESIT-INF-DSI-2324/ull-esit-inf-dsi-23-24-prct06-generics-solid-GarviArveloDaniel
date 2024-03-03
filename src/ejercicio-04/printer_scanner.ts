import { Printable } from "./interface_printable";
import { Scannable } from "./interface_scannable";

/**
 * Represents a PrinterScanner that implements the Printable and Scannable interfaces.
 */
export class PrinterScanner implements Printable, Scannable {

  /**
   * Prints a document.
   */
  print(): void {
    console.log("Printing...");
  }

  /**
   * Scans a document.
   */
  scan(): void {
    console.log("Scanning...");
  }
}
